
// Resource : carts

// import dependencies
const express = require('express');
const { getCartById } = require('../controllers/cartController');



// make cart router
const cartRouter = express.Router();

cartRouter.get('/:id', getCartById);



// exporting the cartRouter
module.exports = cartRouter;