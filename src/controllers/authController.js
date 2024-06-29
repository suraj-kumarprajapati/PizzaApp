
const {loginService}  = require('../services/authService');

async function login(req, res) {
    const loginPayload = req.body;

    // call auth service
    try {
        const response = await loginService(loginPayload);

        try {
            // sending token as cookie
            res.cookie("authToken", response, {
                httpOnly : true,
                maxAge : 7 * 24 * 60 * 60 * 1000,    // 7 days in milliseconds
                secure : false,

            });
        }
        catch(error) {
            console.log("couldn't send token as cookie");
            console.log(error);
        }

 
        res.status(200).json({
            success : true,
            message : "logged in successfully",
            data : {},
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