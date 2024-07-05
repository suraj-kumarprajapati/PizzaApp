const Product = require('../schema/productSchema');
const InternalServerError = require('../utils/internalServerError');
const BadRequestError = require('../utils/badRequestError');
const NotFoundError = require('../utils/notFoundError');


async function createProduct(productDetails) {
    try {
        const response = await Product.create(productDetails);
        return response;
    }
    catch(error) {
        if(error.name == 'ValidationError') {
            const key = Object.keys(error.errors);
            for(const [key, value] of Object.entries(error.errors)) {
                console.log(`${key} : ${value}`);
            }
            throw new BadRequestError(key);   
        }

        console.log(error);
        throw new InternalServerError(); 
        console.log(error.name); 
    }    
}

async function getProductById(productId) {
    try {
        const response = await Product.findById(productId);
        return response;
    }
    catch(error) {
        console.log(error);
        new InternalServerError();
    }
}

async function deleteProductById(productId) {
    try {
        const response = await Product.findByIdAndDelete(productId);
        return response;
    }
    catch(error) {
        console.log(error);
        new InternalServerError();
    }
}




module.exports = {
    createProduct,    
    getProductById,
    deleteProductById
} 