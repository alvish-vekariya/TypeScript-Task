const mongoose = require("mongoose");
require('dotenv').config({ path : '../config/.env'})
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL).then(()=> console.log('product database connected')).catch(err=> console.error(err));

const productSchema = mongoose.Schema({
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

module.exports = ProductModel;