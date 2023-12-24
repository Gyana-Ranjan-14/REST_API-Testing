require("dotenv").config();
// this file is created to insert all json data into mongo db
const connectDb=require("./db/connect");

//getting the models
const Product=require("./models/product")

//here getting the json data
const Productjson =require("./products.json");

const start=async()=>{
  try {
    // connection to the database
    await connectDb(process.env.MONGODB_URL);
    await Product.deleteMany();
    await Product.create(Productjson);
    console.log("Data Sent Successfully");
  } catch (error) {
    console.log(error);
  }
}

start();