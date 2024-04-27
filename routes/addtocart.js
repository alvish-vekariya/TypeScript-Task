const express = require('express');
const router = express.Router()

router.use('/', require('../middleware/AddToCartMiddleware'));

module.exports = router;