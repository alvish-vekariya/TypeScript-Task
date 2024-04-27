import express from 'express';
const router = express.Router();
import getpdfmiddle from '../middleware/GetPdfMiddleware';
router.use('/', getpdfmiddle);

export default router;