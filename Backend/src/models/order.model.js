import mongoose from "mongoose";

const orderitemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    size: {
        type: String,
        enum: ["S", "M", "L", "XL", "2XL", "3XL"],
        required: true
    },
})
const shippingDetailSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    landMark: {
        type: String,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    orderItems: [orderitemSchema],
    deliveryCharge: {
        type: Number,
        default: 0
    },
    paymentMethod: {
        type: String,
        enum: ["COD", "ESEWA", "KHALTI"],
        required: true
    },
    shippingDetails: shippingDetailSchema,
    status: {
        type: String,
        enum: ['PENDING', 'DELIVERED', "CANCELLED"],
        default: "PENDING",
    }

}, {
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema)

export default Order