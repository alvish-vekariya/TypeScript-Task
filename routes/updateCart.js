const express = require('express');
const router = express.Router();

router.use('/', require('../middleware/UpdateCartMiddleware'));

module.exports = router;