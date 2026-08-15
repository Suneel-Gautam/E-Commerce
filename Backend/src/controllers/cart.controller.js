import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { Apiresponse } from "../utils/apiResponse.js";
import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";


const getCart = asyncHandler(async (req, res) => {
    if (!req.user?._id) {
        throw new ApiError(
            401,
            "User not found!!"
        )
    }
    const cart = await Cart.find({
        user: req.user._id
    }).populate('product', "name productImage price stock")

    res.status(200).json(
        new Apiresponse(
            200,
            cart,
            "Cart data fetched Sucessfully!!!"
        )
    )
})
const addCart = asyncHandler(async (req, res) => {

    if (!req.user?._id) {
        throw new ApiError(
            401,
            "User not found!!!"
        )
    }
    const { product, quantity, size } = req.body

    if (!product || !quantity || !size) {
        throw new ApiError(
            400,
            "All feilds required in cart!!"
        )
    }

    const productData = await Product.findById(product)

    if (!productData) {
        throw new ApiError(
            404,
            "Product not found!!!!"
        )
    }

    const existingCart = await Cart.findOne(
        {
            product,
            user: req.user._id,
            size
        }
    )
    let cart;
    if (existingCart) {
        existingCart.quantity += Number(quantity)
        cart = await existingCart.save()
    } else {
        cart = await Cart.create({
            product,
            user: req.user?._id,
            quantity,
            price: productData.price,
            size
        })

        if (!cart) {
            throw new ApiError(
                400,
                "Failed to add the cart!!"
            )
        }
    }
    res.status(200).json(
        new Apiresponse(
            200,
            cart,
            "Cart added sucessfully!!"
        )
    )
})
const editCart = asyncHandler(async (req, res) => {

    const { id } = req.params;
    const { quantity } = req.body;

    if (!quantity || Number(quantity) < 1) {
        throw new ApiError(
            400,
            "Quantity must be at least 1"
        );
    }

    const cart = await Cart.findOne({
        _id: id,
        user: req.user._id
    });

    if (!cart) {
        throw new ApiError(
            404,
            "Cart item not found"
        );
    }

    cart.quantity = Number(quantity);

    await cart.save();

    return res.status(200).json(
        new Apiresponse(
            200,
            cart,
            "Cart updated successfully"
        )
    );

});
const removeCart = asyncHandler(async (req, res) => {

    const id = req.params.id
    const cart = await Cart.findByIdAndDelete({
        _id: id,
        user: req.user._id
    })
    if (!cart) {
        throw new ApiError(
            404,
            "Cart item not found!!"
        )
    }
    res.status(200).json(
        new Apiresponse(
            200,
            {},
            "Cart item removed!!!"
        )
    )

})

export {
    getCart,
    addCart,
    editCart,
    removeCart
}