// Resource : user


// import dependencies
const express = require('express');
const { createUser } = require('../controllers/userController');


// Router() will give an object to add routes in the file 
// it is use to segregate different routes in different modules
const userRouter = express.Router();


userRouter.post('/', createUser);     // this route is for registeration


module.exports = userRouter;

