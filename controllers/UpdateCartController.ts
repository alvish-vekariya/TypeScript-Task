import mongoose from 'mongoose';
import errorHandler from '../handlers/errorHandler';
import ProfilesModel from '../models/ProfilesModel';
import cartModel from '../models/CartModel';
import ProductModel from '../models/ProductModel';
import { NextFunction, Request, Response } from 'express';

const updateCart = async(req: Request, res:Response, next:NextFunction)=>{
    const {userID, profileID, cartID, quantity} = req.body;
    if(!userID || !profileID || !cartID || !quantity) return res.send("userID, profileID, cartID, quantity are required!!");
    try{
        const checkprofile = await ProfilesModel.findOne({"_id":profileID});
        if(checkprofile){
            const targetCart: any = await cartModel.findOne({"_id":cartID});
            const product: any = await ProductModel.findOne({"_id":targetCart.productID}); 
            const newTotal = product.price * quantity;
            await cartModel.findOneAndUpdate({"_id":cartID}, {$set : {"quantity":quantity , "total":newTotal}});
            return res.send('cart updated successfully!!');
        }else{
            return res.send("Profile doesn't found!!");
        }
    }catch(err:any){
        return next(new errorHandler(err.message,500));
    }
}

export default {updateCart};