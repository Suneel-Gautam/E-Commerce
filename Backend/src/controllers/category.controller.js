import { Apiresponse } from "../utils/apiResponse.js";
import { ApiError } from '../utils/apiError.js'
import Category from "../models/category.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const createCategory = asyncHandler(async (req, res) => {
    const { name, color } = req.body
    if (!name.trim()) {
        throw new ApiError(
            400,
            "Name can not be empty !!"
        )
    }
    const category = await Category.create({
        name,
        color
    })
    if (!category) {
        throw new ApiError(
            400,
            "Failed to create the category"
        )
    }
    return res.status(201).json(
        new Apiresponse(
            201,
            {
                category
            },
            "Category created Sucessfully!!"
        )
    )

})

const editCategory = asyncHandler(async (req, res) => {
    const id = req.params.id

    const category = await Category.findByIdAndUpdate(
        id,
        {
            $set: req.body
        },
        {
            new: true
        }

    )

    if (!category) {
        throw new ApiError(
            404,
            "category not found!!"
        )
    }

    return res.status(200).json(
        new Apiresponse(
            200,
            category,
            "Category edited Sucessfully!!"
        )
    )

})

const deleteCategory = asyncHandler(async (req, res) => {
    const id = req.params.id

    const category = await Category.findByIdAndDelete(
        id
    )

    if (!category) {
        throw new ApiError(
            404,
            "Cateogry not found!!!"
        )
    }

    return res.status(200).json(
        new Apiresponse(
            200,
            {},
            "Catogery Deleted Sucessfully!!!"

        )
    )
})


export {
    createCategory,
    editCategory,
    deleteCategory
}