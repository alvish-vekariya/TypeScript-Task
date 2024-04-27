import express from 'express';
const router = express.Router();
import addproductcontroller from '../controllers/AddProductController';

router.post('/',addproductcontroller.addProduct);

export = router;