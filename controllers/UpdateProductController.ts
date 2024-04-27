import { NextFunction, Request, Response } from "express";
import errorHandler from "../handlers/errorHandler";
import ProductModel from "../models/ProductModel";

const updateProduct = async (req:Request, res:Response, next:NextFunction)=>{
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
    }catch(err:any){
        return next(new errorHandler(err.message, 500));
    }
}

export  = {
    updateProduct
}