const express = require('express');
const router = express.Router();

router.use('/', require('../middleware/deleteCartMiddleware'));

module.exports = router;