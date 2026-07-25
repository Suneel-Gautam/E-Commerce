import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        enum: ["S", "M", "L", "XL", "2XL", "3XL"],
        required: true
    },
}, {
    timestamps: true
})

const Cart = mongoose.model('Cart', cartSchema)
export default Cart