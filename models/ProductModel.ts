import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({ path : '../config/.env'})
const mongoURL = process.env.MONGO_URL as string;



interface schemaProduct{
    productName : string,
    price : number,
}

const productSchema = new mongoose.Schema<schemaProduct>({
    productName : {
        type : String,
        require : [true, 'productname is required'],
        unique : true
    },
    price : {
        type : Number,
        require : [true, 'price of product is required']
    }
},{timestamps : true})

const ProductModel = mongoose.model('products',productSchema);

export default ProductModel;