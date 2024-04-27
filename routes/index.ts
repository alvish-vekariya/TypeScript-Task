import express from 'express';
const router = express.Router();
import userRegisterRoute from './UserRegisterRoute'
import userLogin from './UserLoginRoute';
import createProfile from './CreateProfilesRoute';
import updateProfile from './UpdateProfileRoute';
import deleteProfile from './DeleteProfilesRoute';
import addproduct from './addproduct';
import deleteProduct from './deleteproduct'
import updateproduct from './updateproduct';
import logout from "./LogoutUserRoute"

router.use('/user/register', userRegisterRoute);
router.use('/user/login', userLogin)
router.use('/user/updateprofile', updateProfile);
router.use('/user/createprofile', createProfile);
router.use('/user/deleteprofile', deleteProfile);
router.use('/user/logout', logout);
// router.use('/user/getprofiles', require('./GetUserProfiles'));
// router.use('/user/addtocart', require('./addtocart'));
router.use('/seller/addproduct', addproduct);
router.use('/seller/deleteproduct', deleteProduct);
router.use('/seller/updateproduct', updateproduct);
// router.use('/user/getPdf', require('./getpdf'));
// router.use('/user/updatecart', require('./updateCart'));
// router.use('/user/deletecart', require('./deleteCart'));
// router.use('/user/getcarts', require('./getCarts'));
// router.post('/test', require('../controllers/testModels').getOutput);


export = router;