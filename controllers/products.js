// 1st getting all the models
const Product= require("../models/product");
const getAllProduct=async(req,res)=>{

  const {company}=req.query;

  const queryObject={};

  if(company){
    queryObject.company=company
    console.log(queryObject.company);
  }
  const myData=await Product.find(queryObject);
  res.status(200).json({myData});
}

const getAllProductsTesting=async(req,res)=>{
  // req.query = this mean whatever user will type in the search it will take the filter and find it
  //it mostly used to sorting ,filtering and pagi nation,it is always in key value pair
  // if there is more than one query then it will divided by %
  const myData=await Product.find(req.query);
  res.status(200).json({myData});
  }


module.exports={getAllProduct,getAllProductsTesting};