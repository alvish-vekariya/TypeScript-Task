import express from 'express';
const router = express.Router();
import checklogin from '../middleware/CheckLogin';
import getpdfcontroller from '../controllers/GetPdfController';
router.post('/',checklogin.checklogin, getpdfcontroller.getPDF)

export default router;