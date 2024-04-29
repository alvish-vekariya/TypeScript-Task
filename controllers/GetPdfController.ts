import errorHandler from "../handlers/errorHandler";
import PDFDocument from 'pdfkit';
import fs from 'fs';
import cartModel from "../models/CartModel";
import ProfilesModel from "../models/ProfilesModel";
import path from "path";
import { NextFunction, Request, Response } from "express";

const getPDF = async(req:Request,res:Response,next:NextFunction)=>{
    const reqProfileID: string = req.body.profileID;

    try{
        const findCarts = await cartModel.find({profileID: reqProfileID});
        
        const cartprofileID = findCarts[0].profileID as string;
        console.log(cartprofileID.toString()) ;

        const doc = new PDFDocument();

        const writestream = fs.createWriteStream(path.join(__dirname,'..','cart pdfs','profile.pdf'));
        doc.pipe(writestream);
        doc.fontSize(16).text("cart's PDF", {align : 'center'});
        doc.moveDown();
        doc.fontSize(12).text('sr. no.',100,100);
        doc.text('productID',150,100);
        doc.text('quantity',300,100);
        doc.text('total',400,100)

        let yPosition = 120;
        findCarts.forEach((ele, index)=>{
            doc.fontSize(10).text((index+1).toString(), 100, yPosition);
            doc.text(ele.productID as string, 150, yPosition);
            doc.text(ele.quantity.toString(),300, yPosition);
            doc.text(ele.total.toString(), 400, yPosition);
            yPosition += 20;
        })
        doc.end();
    }catch(err: any){
        return next(new errorHandler(err.message,500));
    }
}

export default {
    getPDF
}