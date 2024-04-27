const mongoose = require("mongoose");
require('dotenv').config({ path : '../config/.env'})
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL).then(()=> console.log('cart database connected')).catch(err=> console.error(err));

const cartSchema = mongoose.Schema({
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

module.exports = cartModel;