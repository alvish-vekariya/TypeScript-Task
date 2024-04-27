import express from 'express';
const router = express.Router();
import deleteproductcontroller from '../middleware/DeleteProductMiddleware';

router.use('/', deleteproductcontroller);

export default router;