class ApiError extends Error {
    constructor(status, messsage, errors){
        super(messsage);
        this.status = status;
        this.errors = errors;
    }

    static unauthorizedError(){
        return new ApiError(401, 'Пользователь не авторизован');
    }

    static badRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }
}

export {ApiError}
