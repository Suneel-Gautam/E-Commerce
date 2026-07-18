import { Router } from "express";

import { register, login, logout, changePassword, editProfile } from "../controllers/auth.controller.js";
import { jwtVerify } from "../middlewares/auth.midleware.js";
import { upload } from "../middlewares/mutler.middleware.js";

const router = Router()

router.route('/register').post(
    upload.single('profilePic'),
    register
)
router.route('/login').post(
    login
)
router.route('/logout').post(
    jwtVerify,
    logout
)
router.route('/change-password').post(
    jwtVerify,
    changePassword

)
router.route('/edit-profile').post(
    jwtVerify,
    upload.single('profilePic'),
    changePassword,
    editProfile
)