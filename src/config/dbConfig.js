
const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');

const DB_URL = serverConfig.DB_URL;


async function connectDB() {
    try {
        await mongoose.connect(DB_URL);
        console.log("successfully connected to the mongodb server");
    }
    catch(error) {
        console.log("not able to connet to the mongodb server");
        console.log(error);
    }
}

module.exports = connectDB;