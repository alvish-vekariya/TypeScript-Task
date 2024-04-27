import { NextFunction, Request, Response } from "express";
import errorHandler from "../handlers/errorHandler";
import ProductModel from "../models/ProductModel";

const deleteProduct = async (req:Request,res:Response, next:NextFunction)=>{
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
    }catch(err:any){
        return next(new errorHandler(err.message, 500));
    }
}

export default {
    deleteProduct
}