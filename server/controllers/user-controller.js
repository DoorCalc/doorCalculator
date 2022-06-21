import {UserService} from '../service/user-service.js';

const userService = new UserService();

class UserController {
    async registration(req, resp, next){
        try{
            const {email, password} = req.body;
            const userdata = await userService.registration(email, password);
            resp.cookie('refreshToken', userdata.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return resp.json(userdata);
        } catch (err) {
            console.log(err);
        }
    }

    async login(req, resp, next){
        try{

        } catch (err) {
            console.log(err);
        }
    }

    async logout(req, resp, next){
        try{

        } catch (err) {
            console.log(err);
        }
    }

    async activate(req, resp, next){
        try{

        } catch (err) {
            console.log(err);
        }
    }

    async refresh(req, resp, next){
        try{

        } catch (err) {
            console.log(err);
        }
    }

    async getUsers(req, resp, next){
        try{
            resp.json(['123', '4567']);
        } catch (err) {
            console.log(err);
        }
    }
}

export {UserController};
