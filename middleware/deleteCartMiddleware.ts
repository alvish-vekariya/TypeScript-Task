import express from 'express';
const router = express.Router();
import checklogin from './CheckLogin'
import deletecartcontroller from '../controllers/deleteCartController';

router.delete('/', checklogin.checklogin, deletecartcontroller.deleteCart)

export default router;