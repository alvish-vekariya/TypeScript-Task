import { NextFunction, Request, Response } from "express";
import errorHandler from "../handlers/errorHandler";
import cartModel from "../models/CartModel";
import ProfilesModel from "../models/ProfilesModel";

const deleteCart  = async (req: Request, res: Response, next:NextFunction)=>{
    const {userID, profileID, cartID} = req.body;
    if(!userID || !profileID || !cartID) return res.send("userID, profileID, cartID are required!!");
    try{
        const ProfileAvailable = await ProfilesModel.find({"_id":profileID, "userID":userID});
        if(ProfileAvailable){
            await cartModel.deleteOne({"_id":cartID});
            return res.send("Cart Delete Successfully!");
        }else{
            return res.send("Profile Doesn't Exists!!");
        }
    }catch(err: any){
        return next(new errorHandler(err.message,500));
    }
}

export default {
    deleteCart
}