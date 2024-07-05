const { createProduct, getProductById, deleteProductById } = require("../repositories/productRepository")
const cloudinary = require('../config/cloudinaryConfig');
const fs = require('fs/promises');
const InternalServerError = require("../utils/internalServerError");
const NotFoundError = require('../utils/notFoundError');
const BadRequestError = require('../utils/badRequestError');




async function createProductService(productDetails) {

    // get the image path
    const imagePath = productDetails.imagePath;
    if(imagePath) {
        try {
            // check if productImage exists or not, if yes then upload it on cloudinary and fetch the url
            const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
            var productImage = cloudinaryResponse.secure_url;
            const ImagePathToBeDeleted =  process.cwd()  + '/' + imagePath;
            await fs.unlink(ImagePathToBeDeleted);
        }
        catch(error) {
            console.log(error);
            throw new InternalServerError();
        } 
    }

 
    const product = await createProduct({...productDetails, productImage : productImage});
    return product;
}


async function getProductService(productId) {
    const product = await getProductById(productId);
    
    if(!product) {
        throw new NotFoundError([], productId);
    }

    return product;
}

async function deleteProductService(productId) {
    const product = await deleteProductById(productId);
    
    if(!product) {
        throw new NotFoundError([], productId);
    }
}


module.exports = {
    createProductService,
    getProductService,
    deleteProductService
}