const express = require('express');
const router = express.Router();

router.use('/',require('../middleware/UserLoginMiddleware'));


module.exports = router;