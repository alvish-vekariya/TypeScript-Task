const express = require('express');
const router = express.Router();

router.use('/',require('../middleware/UpdateUserProfilesMiddleware'));

module.exports = router;