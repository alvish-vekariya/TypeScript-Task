import express from 'express';
const router = express.Router();
import getprofilesController from '../controllers/GetUserProfilesController';
import checkLogin from "./CheckLogin";

router.post('/',checkLogin.checklogin, getprofilesController.getProfiles)

export default router;