

const AppError = require('./appError');

class InternalServerError extends AppError {
    constructor() {
        super('Internal Server Error, Something went wrong', 500);
    }
}

module.exports = InternalServerError;