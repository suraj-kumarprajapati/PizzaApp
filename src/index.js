const express = require('express');
const serverConfig = require('./config/serverConfig');


const PORT = serverConfig.PORT;
const app = express();


app.listen(PORT, () => {
  console.log("Server started at PORT : ", PORT);
});


// ip-address:PORT   -> socket address
// localhost:3000   -> socket address
// 127.0.0.0:3000   -> socket address