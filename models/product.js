const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        require:[true,"Price must be provided"]
    },
    feature:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.9
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["Apple","Samsung","Dell","Mi"],
            message:"Company is not valid",
        },
    },

})

module.exports=mongoose.model("Product",productSchema);