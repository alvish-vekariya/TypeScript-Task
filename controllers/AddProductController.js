const errorHandler = require("../handlers/errorHandler");
const ProductModel = require("../models/ProductModel");

const addProduct = async(req, res, next)=>{
    const {productName, price} = req.body;
    if(!productName || !price) return res.send("productname nad price are required!");
    try{
        const checkDuplicate = (await ProductModel.find({})).find(product=> product.productName == productName);
        if(checkDuplicate){
            return res.send("product is already exists");
        }
        if(await ProductModel.create({"productName" : productName, "price":price})){
            return res.send('product added');
        }
    }catch(err){
        return next(new errorHandler(err.message,500));
    }
}

module.exports = {addProduct};