const express = require('express');
const router = express.Router();
const UserRegisterController = require('../controllers/UserRegisterController');

router.use('/',UserRegisterController.registerUser);

module.exports = router;