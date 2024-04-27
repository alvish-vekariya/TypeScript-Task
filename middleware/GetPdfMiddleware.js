const express = require('express');
const router = express.Router();

router.post('/',require('../middleware/CheckLogin').checklogin,require('../controllers/GetPdfController').getPDF)

module.exports = router;