import {v4} from 'uuid';
import {userModel} from '../model/user-model.js';
import {MailService} from '../service/mail-service.js';
import {TokenService} from '../service/token-service.js';
import {UserDto} from '../dtos/user-dto.js';
import {hash} from 'bcrypt';

const mailService = new MailService();
const tokenService = new TokenService();

class UserService {
    async registration(email, password) {
        const candidate = await userModel.findOne({email});
        if(candidate) {
            throw new Error(`Пользователь с почтовым адресом ${email} существует`);
        }
        const hashPassword = await hash(password, 3);
        const activationLink = v4();

        const user = await userModel.create({email, password: hashPassword});
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = tokenService.generateToken({...userDto});
        await tokenService.saveTokenInDb(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto,}
    }
}

export {UserService};
