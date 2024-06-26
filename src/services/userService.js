

class UserService {

    constructor(_userRepository) {
        this.userRepository = _userRepository;
    }

    async registerUser(userDetails) {
        // it will create a brand new user in database

        // check if user already exists
        const user = await this.userRepository.findUser({
            email : userDetails.email,
            mobileNumber : userDetails.mobileNumber
        });

        if(user) {
            // if user found
            throw {
                reason : "user already exists",
                statusCode : 400  // bad request
            }
        }
        
        // if not, then create a user in the database
        const newUser = await this.userRepository.createUser({
            firstName : userDetails.firstName,
            lastName : userDetails.lastName,
            email : userDetails.email,
            mobileNumber : userDetails.mobileNumber,
            password : userDetails.password
        });


        // if couldn't create user in the database
        if(!newUser) {
            throw  {
                reason : `Something went wrong, couldn't create user`,
                statusCode : 500  // internal server error
            }
        }


        // return the details of created user
        return newUser;  
    }
}


module.exports = UserService;