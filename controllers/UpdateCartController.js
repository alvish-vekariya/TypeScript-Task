const mongoose = require('mongoose');
const errorHandler = require('../handlers/errorHandler');
const ProfilesModel = require('../models/ProfilesModel');
const cartModel = require('../models/CartModel');
const ProductModel = require('../models/ProductModel');

const updateCart = async(req, res, next)=>{
    const {userID, profileID, cartID, quantity} = req.body;
    if(!userID || !profileID || !cartID || !quantity) return res.send("userID, profileID, cartID, quantity are required!!");
    try{
        const checkprofile = await ProfilesModel.findOne({"_id":profileID});
        if(checkprofile){
            const targetCart = await cartModel.findOne({"_id":cartID});
            const product = await ProductModel.findOne({"_id":targetCart.productID}); 
            const newTotal = product.price * quantity;
            await cartModel.findOneAndUpdate({"_id":cartID}, {$set : {"quantity":quantity , "total":newTotal}});
            return res.send('cart updated successfully!!');
        }else{
            return res.send("Profile doesn't found!!");
        }
    }catch(err){
        return next(new errorHandler(err.message,500));
    }
}

module.exports = {updateCart};