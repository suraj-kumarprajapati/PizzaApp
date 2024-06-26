// import dependencies
const User = require('../schema/userSchema');



class UserRepository {

    async findUser(parameters) {
        try {
            const resp = await User.findOne({...parameters});
            return resp;
        }
        catch(error) {
            console.log(error);
        }
        
    }

    async createUser(userDetails) {
        try {
            const resp = await User.create(userDetails);
            return resp;
        }
        catch(error) {
            console.log(error);
        }
        
    }
}


module.exports = UserRepository;