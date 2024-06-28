
const {loginService}  = require('../services/authService');

async function login(req, res) {
    const loginPayload = req.body;

    // call auth service
    try {
        const response = await loginService(loginPayload);
        res.status(200).json({
            success : true,
            message : "logged in successfully",
            data : response,
            error : {}
        });
    }
    catch(error) {
        res.status(error.statusCode).json({
            success : false,
            message : error.message,
            data : {},
            error : error
        });
    }
   

    
}



module.exports = {
    login
}