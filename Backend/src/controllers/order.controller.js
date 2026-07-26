import { ApiError } from "../utils/apiError.js";
import { Apiresponse } from "../utils/apiResponse";
import { asyncHandler } from "../utils/asyncHandler.js";
import Order from "../models/order.model.js";

const createOrder = asyncHandler(async (req, res) => {

    const { orderPrice, orderItems, shippingDetails, paymentMethod } = req.body

    if (orderPrice < 0) {
        throw new ApiError(
            400,
            "Order price not set "
        )
    }

    if (!Array.isArray(orderItems) || orderItems.length === 0) {
        throw new ApiError(
            400,
            "Aleast one product needed to create product "
        )
    }
    if (
        !shippingDetails ||
        !shippingDetails.address ||
        !shippingDetails.street ||
        !shippingDetails.landMark
    ) {
        throw new ApiError(
            400,
            "Please provide complete shipping details."
        );
    }
    if (!paymentMethod) {
        throw new ApiError(
            400,
            "Payment method doesnt exist "

        )
    }
    const order = await Order.create({
        customer: req.user._id,
        orderPrice,
        orderItems,
        shippingDetails,
        paymentMethod
    })
    if (!order) {
        throw new ApiError(
            400,
            "Failed to create order!!!"
        )
    }
    return res.status(200).json(
        new Apiresponse(
            200,
            order,
            "Order Created Sucessfully!!"
        )
    )

})
const editOrder = asyncHandler(async (req, res) => {
    const id = req.params.id
    const { status } = req.body
    const order = await Order.findByIdAndUpdate(
        id,
        {
            $set: {
                status
            }
        },
        {
            returnDocument: "after"
        }
    )
    if (!order) {
        throw new ApiError(
            404,
            "Order not found!!!"
        )
    }
    return res.status(200).json(
        new Apiresponse(
            200,
            order,
            "Order Status Edited Sucessfully!!!"

        )
    )

})
const getOrder = asyncHandler(async (req, res) => {
    const order = await Order.find({
        customer: req.user._id
    })
        .populate("customer", "username email phone profilePic")
        .populate('orderItems.product', 'name productImage price stock')

    if (!order) {
        throw new ApiError(
            404,
            "Order not found"
        )
    }

    return res.status(200).json(
        new Apiresponse(
            200,
            {
                order
            },
            "Order Fetched Sucessfully!!"

        )
    )
})
const getOrderDetails = asyncHandler(async (req, res) => {
    const id = req.params.id
    const order = await Order.findById(id)
    if (!order) {
        throw new ApiError(
            404,
            "Order not found with order Id"
        )
    }
    return res.status(200).json(
        new Apiresponse(
            200,
            { order },
            "Order Details Fetched Sucessfully!!"

        )
    )

})

export {
    createOrder,
    editOrder,
    getOrder,
    getOrderDetails
}