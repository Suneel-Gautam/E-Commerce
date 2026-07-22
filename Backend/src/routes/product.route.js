import {
    createProduct,
    editProduct,
    deleteProduct,
    getProduct,
    getProductDetails
} from "../controllers/product.controller.js";
import { Router } from "express";
import { jwtVerify } from "../middlewares/auth.midleware.js";
import { upload } from "../middlewares/mutler.middleware.js";

const router = Router()

router.route('/').post(
    jwtVerify,
    upload.single('productImage'),
    createProduct
)

router.route('/:id').patch(
    jwtVerify,
    upload.single('productImage'),
    editProduct
)
router.route('/:id').delete(
    jwtVerify,
    deleteProduct
)
router.route('/').get(
    getProduct
)
router.route('/:id').get(
    getProductDetails
)

export default router