import express from 'express';
const router = express.Router();
import updateproductmiddle from '../middleware/UpadateProductMiddleware';

router.use('/',updateproductmiddle);

export default router;