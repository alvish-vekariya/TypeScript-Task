import express from 'express';
const router= express.Router();
import addproductmiddle from '../middleware/AddProductMiddleware';

router.use('/',addproductmiddle);

export default router;