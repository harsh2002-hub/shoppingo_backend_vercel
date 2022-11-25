
const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const errorMiddleware=require("./middleware/error");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const cors = require('cors');
const corsOptions ={
    origin:true,
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));



// importing routes

const product=require("./routes/productRoute");
const user=require("./routes/userRoute");
const order=require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);


// middleware for error
app.use(errorMiddleware);
module.exports=app;