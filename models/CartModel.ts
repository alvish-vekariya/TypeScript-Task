import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({ path : '../config/.env'})
const mongoURL = process.env.MONGO_URL as string;

mongoose.connect(mongoURL).then(()=> console.log('cart database connected')).catch(err=> console.error(err));

interface schemacart{
    profileID : string | undefined,
    productID : string | undefined,
    quantity : number,
    total : number
}

const cartSchema = new mongoose.Schema<schemacart>({
    profileID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'profiles',
        required : [true, 'profileID is required!']
    },
    productID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'products',
        required : [true , 'productID is required!']
    },
    quantity : {
        type : Number,
        default : 1
    },
    total : {
        type : Number
    }
},{timestamps :  true})

const cartModel = mongoose.model('carts',cartSchema);

export default cartModel;