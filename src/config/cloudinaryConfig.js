
// import dependencies
const cloudinary = require('cloudinary').v2;
const serverConfig = require('./serverConfig');


// configuration
cloudinary.config({
    cloud_name : serverConfig.CLOUDINARY_CLOUD_NAME,
    api_key : serverConfig.CLOUDINARY_API_KEY,
    api_secret : serverConfig.CLOUDINARY_API_KEY
});



module.exports = cloudinary;