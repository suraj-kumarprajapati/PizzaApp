const express = require('express');
const bodyParser = require('body-parser');
const serverConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');


const PORT = serverConfig.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text()); 
app.use(bodyParser.urlencoded());


app.listen(PORT, async () => {
  await connectDB();
  console.log("Server started at PORT : ", PORT);
});

   
// ip-address:PORT   -> socket address
// localhost:3000   -> socket address
// 127.0.0.0:3000   -> socket address


 

