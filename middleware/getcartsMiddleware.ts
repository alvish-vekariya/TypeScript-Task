import express from 'express';
const router = express.Router();
import checklogin from './CheckLogin';
import getCartController from '../controllers/getCartsController';

router.post("/", checklogin.checklogin, getCartController.getcarts);

export default router;