
const {createProductService, getProductService, deleteProductService} = require('../services/productService');
const AppError = require('../utils/appError');


async function addProduct(req, res) {
    // first upload the image on cloudinary and get the url of the media and get the url for the media
    try {
        const product = await createProductService({
            productName : req.body.productName,
            description : req.body.description,
            price : req.body.price,
            category : req.body.category,
            inStock : req.body.inStock,
            imagePath : req.file?.path 
        });

        res.status(201).json({    
            success : true,
            message : 'product added successfully',
            data : product,
            error : {}  
        });
        return;
    } 
    catch(error) {
        console.log(error);
        if(error instanceof AppError) {
            res.status(error.statusCode).json({
                success : false,
                message : error.message,
                data : {},
                error : error
            });
        }   

        else {
            res.status(error.statusCode).json({
                success : false,
                message : 'Something went wrong! Internal Server Error',
                data : {},
                error : error
            });
        }
        
    }

}


async function getProduct(req, res) {
    try {
        const response = await getProductService(req.params.id);
        res.status(200).json({
            success : true,
            message : 'product fetched successfully',
            data : response,
            error : {}  
        });
        return;
    }
    catch(error) {
        console.log(error);
        if(error instanceof AppError) {
            res.status(error.statusCode).json({
                success : false,
                message : error.message,  
                data : {},
                error : error
            });
        }   
        else {
            res.status(error.statusCode).json({
                success : false,
                message : 'Something went wrong! Internal Server Error',
                data : {},
                error : error
            });
        }
        
    }
}

async function deleteProduct(req, res) {
    try {
        const response = await deleteProductService(req.params.id);
        res.status(200).json({
            success : true,
            message : 'product deleted successfully',
            data : response,
            error : {}  
        });
        return;
    }
    catch(error) {
        console.log(error);
        if(error instanceof AppError) {
            res.status(error.statusCode).json({
                success : false,
                message : error.message,
                data : {},
                error : error
            });
        }   
        else {
            res.status(error.statusCode).json({
                success : false,
                message : 'Something went wrong! Internal Server Error',
                data : {},
                error : error
            });
        }
    }
}


module.exports = {
    addProduct,
    getProduct,
    deleteProduct
}


