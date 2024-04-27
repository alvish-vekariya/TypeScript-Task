import express from 'express';
const router = express.Router();
import loginCheck from './CheckLogin';
import addtocartcontroller from '../controllers/AddToCartController';

router.post('/',loginCheck.checklogin, addtocartcontroller.addCart);

export default router;