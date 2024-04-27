const errorHandler = require("../handlers/errorHandler");
const ProductModel = require("../models/ProductModel");

const deleteProduct = async (req,res, next)=>{
    const {productName} = req.body;
    try{
        const checkAvailable = await ProductModel.findOne({"productName":productName});
        if(checkAvailable){
            if(await ProductModel.findOneAndDelete({"productName":productName})){
                return res.send("product is deleted!!")
            }
        }else{
            return res.send('product is not available')
        }
    }catch(err){
        return next(new errorHandler(err.message, 500));
    }
}

module.exports = {
    deleteProduct
}