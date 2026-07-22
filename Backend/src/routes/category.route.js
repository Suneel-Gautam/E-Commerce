import {
    createCategory,
    editCategory,
    deleteCategory,
    getCategory
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
router.route('/').get(
    getCategory
)

export default router
