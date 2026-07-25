import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    productImage: {
        type: String,
    },
    price: {
        type: String,
        default: 0
    },
    stock: {
        type: String,
        default: 0
    },
    size: [{
        type: String,
        enum: ["S", "M", "L", "XL", "2XL", "3XL"],
        required: true
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }

}, {
    timestamps: true
})
const Product = mongoose.model('Product', productSchema)

export default Product