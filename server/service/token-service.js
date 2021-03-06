import pkgSign from 'jsonwebtoken';
import {jwt_access_secret, jwt_refresh_secret} from "../configs/db-config.js";
import {tokenModel} from '../model/token-model.js';
const {sign} = pkgSign;

class TokenService {
    generateToken(payload) {
        const accessToken = sign(payload, jwt_access_secret, {expiresIn: '30m'});
        const refreshToken = sign(payload, jwt_refresh_secret, {expiresIn: '30d'});
        return {
            accessToken,
            refreshToken
        }
    }

    async saveTokenInDb(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({user: userId});
        if(tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await tokenModel.create({user: userId, refreshToken});
        return token;
    }
}

export {TokenService};
