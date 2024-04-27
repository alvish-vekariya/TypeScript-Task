import express from 'express';
const router = express.Router();
import getprofilesmiddle from '../middleware/GetProfilesMiddleware';

router.use('/',getprofilesmiddle);

export default router;