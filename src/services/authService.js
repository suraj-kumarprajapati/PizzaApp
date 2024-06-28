// import depecdencies
const UserRepository = require("../repositories/userRepository");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_SECRET, JWT_EXPIRY} = require('../config/serverConfig');



async function loginService(authDetails) {
    // fetch authDetails
    const email = authDetails.email;
    const plainPassword = authDetails.password;

    // create userRepository object to get access to findUser function
    const userRepo = new UserRepository();

    // find user based on email
    const user = await userRepo.findUser({email});
    
    if(!user) {
        console.log("couldn't found user");
        throw {
            message : "no user found with the given email", 
            statusCode : 404  // not found
        }
    } 
    
    // if the user is found, we need to compare the plain password with the encrypted password
    const match = await bcrypt.compare(plainPassword, user.password);
    if(!match) {
        console.log("password does not match");
        throw {
            message : "Incorrect password! please try again",
            statusCode : 401   // unauthorised
        }
    }
    
    // if password is validated then create a token and return
    const token = jwt.sign({email : user.email, id : user._id}, JWT_SECRET, {
            expiresIn : JWT_EXPIRY
    });
    
    // return the token
    return token; 
}



module.exports = {
    loginService
}