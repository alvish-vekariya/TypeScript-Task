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
import logout from "./LogoutUserRoute";
import userprofiles from './GetUserProfiles'
import addtocart from './addtocart';
import getcart from './getCarts';
import updatecart from './updateCart';
import deletecart from './deleteCart';
import getpdf from './getpdf';

router.use('/user/register', userRegisterRoute);
router.use('/user/login', userLogin)
router.use('/user/updateprofile', updateProfile);
router.use('/user/createprofile', createProfile);
router.use('/user/deleteprofile', deleteProfile);
router.use('/user/logout', logout);
router.use('/user/getprofiles', userprofiles);
router.use('/user/addtocart', addtocart);
router.use('/seller/addproduct', addproduct);
router.use('/seller/deleteproduct', deleteProduct);
router.use('/seller/updateproduct', updateproduct);
router.use('/user/getPdf', getpdf);
router.use('/user/updatecart', updatecart);
router.use('/user/deletecart', deletecart);
router.use('/user/getcarts', getcart);


export = router;