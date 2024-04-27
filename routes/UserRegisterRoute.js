const express = require('express');
const router = express.Router();
const UserRegisterMiddleware = require('../middleware/UserRegisterMiddleware');

router.post('/',UserRegisterMiddleware);

module.exports = router;