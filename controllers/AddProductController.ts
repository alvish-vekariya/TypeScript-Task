import { NextFunction, Request, Response } from "express";
import errorHandler from "../handlers/errorHandler";
import ProductModel from "../models/ProductModel";

const addProduct = async(req:Request, res:Response, next:NextFunction)=>{
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
    }catch(err: any){
        return next(new errorHandler(err.message,500));
    }
}

export = {addProduct};