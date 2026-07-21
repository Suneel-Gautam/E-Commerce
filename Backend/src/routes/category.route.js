import {
    createCategory,
    editCategory,
    deleteCategory
} from "../controllers/category.controller.js";
import { Router } from "express";

const router = Router()


router.route('/').post(
    createCategory
)
router.route('/:id').patch(
    editCategory
)
router.route('/:id').delete(
    deleteCategory
)

export default router
