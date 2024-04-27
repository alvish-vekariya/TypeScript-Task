const errorHandler = require("../handlers/errorHandler");
const ProductModel = require("../models/ProductModel");

const updateProduct = async (req, res, next)=>{
    const {productName, updateProductName, UpdatePrice} = req.body;
    if(!productName || !updateProductName || !UpdatePrice) return res.send("productName, updateProductName, UpdatePrice is required!");
    try{
        const checkAvailable = await ProductModel.findOne({"productName":productName});
        if(checkAvailable){
            await ProductModel.findOneAndUpdate({"productName" : productName},{$set : {"productName" : updateProductName,"price":UpdatePrice}});
            return res.send("product is updated!!");
        }else{
            return res.send("product is not Availabel!");
        }
    }catch(err){
        return next(new errorHandler(err.message, 500));
    }
}

module.exports  = {
    updateProduct
}