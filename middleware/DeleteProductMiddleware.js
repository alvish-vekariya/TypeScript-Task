const express = require('express');
const router = express.Router();

router.delete('/',require("../controllers/DeleteProductConstroller").deleteProduct);

module.exports  =router;