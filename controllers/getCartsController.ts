import { NextFunction, Request, Response } from "express";
import errorHandler from "../handlers/errorHandler";
import cartModel from "../models/CartModel";
import ProfilesModel from "../models/ProfilesModel";

const getcarts = async(req:Request, res:Response, next:NextFunction)=>{
    const {userID, profileID} = req.body;
    if(!profileID) return res.send("profileID is required!");
    try{
        const checkProfile = await ProfilesModel.findOne({"userID":userID, "_id":profileID});
        if(checkProfile){
            const cartItems = await cartModel.find({"profileID":profileID});
            return res.send(cartItems);
        }else{
            return res.send("profile doesn't exists!!");
        }
    }catch(err: any){
        return next(new errorHandler(err.message, 500));
    }
}

export default {
    getcarts
}