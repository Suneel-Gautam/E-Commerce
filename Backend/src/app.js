import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import categoryRoute from './routes/category.route.js'
import authRoute from './routes/auth.route.js'
import productRoute from './routes/product.route.js'
import cartRoute from './routes/cart.route.js'
import orderRoute from './routes/order.route.js'



const app = express()

app.use(cors({
    origin: "http://localhost:57473",
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(express.static('public'))
app.use(cookieParser())


app.use('/api/v1/auth', authRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/product', productRoute)
app.use('/api/v1/cart', cartRoute)
app.use('/api/v1/order', orderRoute)



app.use((err, req, res, next) => {

    console.log("ERROR:", err)

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Something went wrong",
        errors: err.error || [],
        data: null
    })
})


export { app }