import {
    createProduct,
    editProduct,
    deleteProduct
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

export default router