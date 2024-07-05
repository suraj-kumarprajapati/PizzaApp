
const AppError = require('./appError');

class BadRequestError extends AppError {
    constructor(invalidParams ) {
        // invalidParams : []
        
        let message = "";
        invalidParams.forEach(params => {
            return message += `${params}\n`
        });
        super(`The request has following invalid parameters : ${invalidParams}`, 400);
    }   
}

module.exports = BadRequestError;