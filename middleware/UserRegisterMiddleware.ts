import express from 'express';
const router = express.Router();
import registerUser from '../controllers/UserRegisterController';

router.use('/', registerUser);

export default router;