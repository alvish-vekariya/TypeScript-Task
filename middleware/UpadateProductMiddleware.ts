import express from 'express';
const router = express.Router();
import updateproductcontroller from '../controllers/UpdateProductController';

router.put('/',updateproductcontroller.updateProduct)

export = router;