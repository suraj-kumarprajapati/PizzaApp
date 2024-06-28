// import dependencies
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/serverConfig');


async function isLoggedIn(req, res, next) {
    const token = req.cookies['authToken'];

    // if token is not found
    if(!token) {
        res.status(401).json({
            success : false,  
            message : "auth token not provided",
            data : {},
            error : "not authenticated"
        });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    // if couldn't decode the token
    if(!decoded) {
        res.status(401).json({ 
            success : false,
            message : "invalid token provided",
            data : {},
            error : "not authenticated"
        });
    }

    // if reached here, means user is authenticated therefore allow him/her to access
    req.user = {
        email : decoded.email,
        id : decoded.id
    }
 
    next();
}


module.exports = {
    isLoggedIn
}