
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    firstName : {
        type : String, 
        required : [true, "First Name is required"],
        minlength : [5, "First Name should be minimum of five characters"],
        lowercase : true,
        trim : true,  // automatically trims extra space at the start or end of string
        maxlength : [20, "First Name should be maximum of 20 characters"]
    },

    lastName : {
        type : String, 
        required : [true, "Last Name is required"],
        minlength : [5, "Last Name should be minimum of five characters"],
        lowercase : true,
        trim : true,  // automatically trims extra space at the start or end of string
        maxlength : [20, "Last Name should be maximum of 20 characters"]
    },

    mobileNumber : {
        type : String,
        trim : true,
        unique : [true, "Phone Number already in use"],
        required : [true, "Phone Number is required"],
        minlength : [10, "Minimum Length must be 10"],
        maxlength : [10, "Maximum Length must be 10"]
    },

    email : {
        type : String,
        trim : true,
        required : [true, "Email should be provided"],
        unique : [true, "Email is already in use"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    password : {
        type : String,
        required : [true, "Password should be provided"],
        minlength : [6, "Password should be minimum of 6 characters"]
    }
}, { timestamps : true });


const User = mongoose.model("User", userSchema);
module.exports = User;