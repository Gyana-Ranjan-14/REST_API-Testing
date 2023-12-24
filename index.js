require("dotenv").config();
const express= require("express");
const app = express();

const connectDB =require("./db/connect")
// the req "object represent the Http request and has the properties for the request query string,parameters,body and http headers"
const PORT=process.env.PORT||3000;

// here i am getting all the routes of all the product.
const products_routs=require("./routs/products")

// middleware or set router( this is when enter the following end point)
app.use("/api/products",products_routs);


//this is when a use go to home page.
app.get("/",(req,res)=>{
    res.send("Congo Chiku You are Live");
});


// listen to server

connectDB(process.env.MONGODB_URL);
app.listen(PORT,()=>{
    console.log("Server is running on port 3000");
})