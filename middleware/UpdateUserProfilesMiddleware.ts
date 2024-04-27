import express from 'express';
const router = express.Router();
import UpdateUserProfileController from'../controllers/UpdateUserProfileController';
import loginmiddleware from'./CheckLogin';

router.put('/', loginmiddleware.checklogin, UpdateUserProfileController.updateProfiles);

export default router;