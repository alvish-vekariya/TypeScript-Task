import express from 'express';
const router = express.Router();
import checklogin from './CheckLogin';
import updatecartcontroller from '../controllers/UpdateCartController';

router.put('/',checklogin.checklogin, updatecartcontroller.updateCart);

export default router;