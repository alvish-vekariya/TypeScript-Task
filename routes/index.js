const express = require('express');
const router = express.Router();

router.use('/user/register', require('./UserRegisterRoute'));
router.use('/user/login', require('./UserLoginRoute'));
router.use('/user/updateprofile', require('./UpdateProfileRoute'));
router.use('/user/createprofile', require('./CreateProfilesRoute'));
router.use('/user/deleteprofile', require('./DeleteProfilesRoute'));
router.use('/user/logout', require('./LogoutUserRoute'));
router.use('/user/getprofiles', require('./GetUserProfiles'));
router.use('/user/addtocart', require('./addtocart'));
router.use('/seller/addproduct', require('./addproduct'));
router.use('/seller/deleteproduct', require('./deleteproduct'));
router.use('/seller/updateproduct', require('./updateproduct'));
router.use('/user/getPdf', require('./getpdf'));
router.use('/user/updatecart', require('./updateCart'));
router.use('/user/deletecart', require('./deleteCart'));
router.use('/user/getcarts', require('./getCarts'));
router.post('/test', require('../controllers/testModels').getOutput);


module.exports = router;