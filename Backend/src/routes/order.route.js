import { Router } from "express";
import { createOrder, editOrder, getOrder, getOrderDetails } from "../controllers/order.controller.js";
import { jwtVerify } from "../middlewares/auth.midleware.js";

const router = Router()

router.route('/').get(
    jwtVerify,
    getOrder
)
router.route('/:id').get(
    jwtVerify,
    getOrderDetails
)
router.route('/').post(
    jwtVerify,
    createOrder
)
router.route('/:id').patch(
    jwtVerify,
    editOrder
)

export default router