const express = require('express');
const router = express.Router();

router.post('/',require('../controllers/AddProductController').addProduct);

module.exports = router;