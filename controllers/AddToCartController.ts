import ProductModel from '../models/ProductModel';
import errorHandler from '../handlers/errorHandler';
import cartModel from '../models/CartModel';
import ProfilesModel from '../models/ProfilesModel';
import { NextFunction, Request, Response } from 'express';

const addCart = async (req: Request, res:Response, next:NextFunction)=>{
    const {userID, profileName, productName, quantity} = req.body;
    if(!productName || !quantity || !userID || !profileName) return res.send("userID, profileName, productName and quantity are required");
    try{
        const checkProfile = await ProfilesModel.findOne({"profileName":profileName, "userID": userID});
        if(checkProfile){
            const checkAvailable = await ProductModel.findOne({"productName" : productName})
            if(checkAvailable){
                const total = checkAvailable.price * quantity;
                await cartModel.create({"profileID": checkProfile._id, "productID" : checkAvailable._id, "quantity" : quantity, "total" : total});
                res.send('oder added to cart!!');
            }else{
                return res.send('product is not Available!!');
            }
        }else{
            return res.send('profile not exists!');
        }
        
    }catch(err : any){
        return next(new errorHandler(err.message,500));
    }
}

export default {addCart};