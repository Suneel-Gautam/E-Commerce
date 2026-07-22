import { Apiresponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import Product from "../models/product.model.js";
import { fileUpload } from "../utils/cloudinary.js";


const createProduct = asyncHandler(async (req, res) => {
    const { name, description, price, stock, category } = req.body

    if (!name.trim() || !description.trim() || !price || !stock || !category) {
        throw new ApiError(
            400,
            "All feilds must be provided!!!"
        )
    }

    const productImagePath = req.file?.productImage.path

    if (productImagePath) {
        const productImage = await fileUpload(productImagePath)
    }

    const product = await Product.create({
        name,
        description,
        price,
        stock,
        category,
        productImage: productImage || "",
        owner: req.user._id
    })

    if (!product) {
        throw new ApiError(
            400,
            "Failed to create a product"
        )
    }

    return res.status(200).json(
        new Apiresponse(
            200,
            product,
            "Product Created SucessFully!!"
        )
    )
})
const editProduct = asyncHandler(async (req, res) => {

    const id = req.params.id

    const { name, description, price, stock, category } = req.body

    const updatedFields = {}

    if (name.trim()) {
        updatedFields.name = name
    }
    if (description.trim()) {
        updatedFields.description = description
    }
    if (price) {
        updatedFields.price = price
    }
    if (stock) {
        updatedFields.stock = stock
    }
    if (category) {
        updatedFields.category = category
    }

    const productImagePath = req.file?.productImage.path

    if (productImagePath) {
        const productImage = await fileUpload(productImagePath)
        updatedFields.productImage = productImage
    }

    const product = await Product.findByIdAndUpdate(
        id,
        {
            $set: updatedFields
        },
        {
            new: true
        }
    )

    if (!product) {
        throw new ApiError(
            400,
            "Failed to update the Product"
        )
    }

    return res.status(200).json(
        new Apiresponse(
            200,
            product,
            "Product Updated Sucessfully"
        )
    )


})
const deleteProduct = asyncHandler(async (req, res) => {

    const id = req.params.id

    const product = await Product.findByIdAndDelete(
        id
    )

    if (!product) {
        throw new ApiError(
            404,
            "Product not found!!"
        )
    }

    return res.status(200).json(
        new Apiresponse(
            200,
            {},
            "Product deleted Sucessfully!!!"
        )
    )

})
const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.find()

    return res.status(200).json(
        200,
        "Product fetched Sucessfully!!"
    )
})
const getProductDetails = asyncHandler(async (req, res) => {
    const id = req.params.id

    const product = await Product.findById(id)
    if (!product) {
        throw new ApiError(
            404,
            "Product not found!!!"
        )
    }

    return res.status(200).json(
        new Apiresponse(
            200,
            product,
            "Product details fetched Sucessfully!!"
        )
    )
})

export {
    createProduct,
    deleteProduct,
    editProduct,
    getProduct,
    getProductDetails
}