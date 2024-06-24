const express = require('express');
// const bodyParser = require('body-parser');
const serverConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const User = require('./schema/userSchema')


const PORT = serverConfig.PORT; 
const app = express();

 
// middlewares
// app.use(bodyParser.json());
// app.use(bodyParser.text());  
// app.use(bodyParser.urlencoded());  

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended : true}));


app.listen(PORT, async () => {
  await connectDB();
  console.log("Server started at PORT : ", PORT);


  // const newUser = User.create({
  //   firstName : "surajkumar",
  //   lastName : "prajapati",
  //   mobileNumber : "4320904394",
  //   email : "abc@gmail.com",
  //   password : "243234fd432"
  // }); 

  // console.log("new user created");
  // console.log(newUser); 

});
  
   
// ip-address:PORT   -> socket address
// localhost:3000   -> socket address
// 127.0.0.0:3000   -> socket address


 

