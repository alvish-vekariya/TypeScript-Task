const express = require('express');
const router = express.Router();
const getprofilesController = require('../controllers/GetUserProfilesController');
const checkLogin = require("./CheckLogin");

router.post('/',checkLogin.checklogin, getprofilesController.getProfiles)

module.exports = router;