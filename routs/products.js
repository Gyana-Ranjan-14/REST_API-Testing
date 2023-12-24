const express =require("express");
const router =express.Router();
const {
    getAllProduct,
    getAllProductsTesting
}=require("../controllers/products")

// when a user go to homepage he will get allproduct
router.route("/").get(getAllProduct);
router.route("/testing").get(getAllProductsTesting);

module.exports= router;