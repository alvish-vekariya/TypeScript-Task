const express = require('express');
const router = express.Router();

router.put('/',require('../controllers/UpdateProductController').updateProduct)

module.exports = router;