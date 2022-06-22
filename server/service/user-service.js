import {v4} from 'uuid';
import {userModel} from '../model/user-model.js';
import {MailService} from '../service/mail-service.js';
import {TokenService} from '../service/token-service.js';
import {UserDto} from '../dtos/user-dto.js';
import {hash} from 'bcrypt';
import {api_url} from '../configs/db-config.js';
import {ApiError} from "../exceptions/api-error.js";

const mailService = new MailService();
const tokenService = new TokenService();

class UserService {
    async registration(email, password) {
        const candidate = await userModel.findOne({email});
        if(candidate) {
            throw ApiError.badRequest(`Пользователь с почтовым адресом ${email} существует`);
        }
        const hashPassword = await hash(password, 3);
        const activationLink = v4();

        const user = await userModel.create({email, password: hashPassword, activationLink});
        await mailService.sendActivationMail(email, `${api_url}/api/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = tokenService.generateToken({...userDto});
        await tokenService.saveTokenInDb(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto,}
    }

    async activate(activationLink){
        const user = await userModel.findOne({activationLink});
        if(!user) {
            throw ApiError.badRequest('Некорректная ссылка активации');
        }
        user.isActivated = true;
        await user.save();
    }
}

export {UserService, api_url};
