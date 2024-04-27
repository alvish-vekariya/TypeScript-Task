import express from 'express';
const router = express.Router()
import addtocartmiddle from '../middleware/AddToCartMiddleware';

router.use('/', addtocartmiddle);

export default router;