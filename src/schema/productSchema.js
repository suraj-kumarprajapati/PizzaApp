
// import the dependencies
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName :  {
        type : String,
        unique : [true, "product name should be unique"],
        required : [true, "product name is required"],
        minLength : [5, "product name should be atleast 5 characters long"],
        trim : true
    },

    description : {
        type : String,
        required : [true, "description is required"],
        maxLength : [500, "description should be maximum of 500 characters"]
    },

    productImage : {
        type : String
    },

    price : {
        type : Number,
        required : [true, "price is required"],
        min : [100, "min price should be Rs. 100"],
    },

    category : {
        type : String,
        enum : ['veg', 'non-veg', 'drinks', 'sides'],
        default : 'veg'
    },

    inStock : {
        type : Boolean,
        required : [true, 'In Stock status is required'],
        default : true
    },

    ingredients : {
        type : [{name : String, quantity : Number}],
    }
}, {timestamps : true});



const Product = mongoose.model("Product", productSchema);

module.exports = Product;