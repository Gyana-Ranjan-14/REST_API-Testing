const mongoose=require("mongoose");

const connectDB=(uri)=>{
    console.log("Congrats Database Connected");
    return mongoose.connect(uri,{

    });
}

module.exports=connectDB;