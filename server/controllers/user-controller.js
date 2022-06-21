
class UserController {
    async registration(req, resp, next){
        try{

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
