import mongoose from "mongoose";

const orderitemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: String,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    orderItems: [orderitemSchema],
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['PENDING', 'DELIVERED', "CANCELLED"],
        default: "PENIDNG",
    }

})

const Order = mongoose.model('Order', orderSchema)

export default Order