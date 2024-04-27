const express = require('express');
const router = express.Router();
const UserLoginController = require('../controllers/UserLoginController');

router.post('/',UserLoginController.loginUser);

module.exports = router;