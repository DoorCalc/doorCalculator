import {UserService, api_url} from '../service/user-service.js';

const userService = new UserService();

class UserController {
    async registration(request, response, next){
        try{
            const {email, password} = request.body;
            const userdata = await userService.registration(email, password);
            response.cookie('refreshToken', userdata.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return await response.json(userdata);
        } catch (err) {
            next(err);
        }
    }

    async login(request, response, next){
        try{

        } catch (err) {
            next(err);
        }
    }

    async logout(request, response, next){
        try{

        } catch (err) {
            next(err);
        }
    }

    async activate(request, response, next){
        try{
            const activationLink = request.params.link;
            await userService.activate(activationLink);
            return response.redirect(api_url);
        } catch (err) {
            next(err);
        }
    }

    async refresh(request, response, next){
        try{

        } catch (err) {
            next(err);
        }
    }

    async getUsers(request, response, next){
        try{
            response.json(['123', '4567']);
        } catch (err) {
            next(err);
        }
    }
}

export {UserController};
