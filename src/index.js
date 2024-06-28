const express = require('express');
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const serverConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const User = require('./schema/userSchema');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRoute');
const authRouter = require('./routes/authRoute');
const { isLoggedIn } = require('./validation/authValidation');


const PORT = serverConfig.PORT; 
const app = express();

 
// middlewares
// app.use(bodyParser.json());
// app.use(bodyParser.text());  
// app.use(bodyParser.urlencoded());  


// middlewares
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());;


// routing middlewares 
app.use('/users', userRouter);
app.use('/carts', cartRouter);
app.use('/auth', authRouter);

app.get('/ping', isLoggedIn, (req, res) => {
  console.log("cookies : ", req.cookies);
  res.json({
    message : "pong"
  });
});



app.listen(PORT, async () => {
  await connectDB();
  console.log("Server started at PORT : ", PORT);
});
    
    
// ip-address:PORT   -> socket address
// localhost:3000   -> socket address
// 127.0.0.0:3000   -> socket address


 

 