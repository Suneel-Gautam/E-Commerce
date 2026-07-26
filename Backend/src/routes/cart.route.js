import { getCart, addCart, editCart, removeCart } from "../controllers/cart.controller";
import { Router } from "express";
import { jwtVerify } from "../middlewares/auth.midleware.js";

const router = Router()

router.route('/').post(
    jwtVerify,
    addCart
)
router.route('/:id').patch(
    jwtVerify,
    editCart
)
router.route('/:id').delete(
    jwtVerify,
    removeCart
)
router.route('/').get(
    jwtVerify,
    getCart
)

export default router