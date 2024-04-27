import express from 'express';
const router = express.Router();
import UserLogoutController from '../controllers/UserLogoutConstroller';

router.post('/', UserLogoutController.logoutUser);

export = router;