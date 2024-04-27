const express = require('express');
const router= express.Router();

router.use('/',require('../middleware/AddProductMiddleware'));

module.exports = router;