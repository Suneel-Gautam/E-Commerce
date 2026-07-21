import express from 'express'
import { configDotenv } from "dotenv"
import cookieParser from 'cookie-parser'
import cors from 'cors'
import categoryRoute from './routes/category.route.js'
import authRoute from './routes/auth.route.js'

configDotenv()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(express.static('public'))
app.use(cookieParser())


app.use('/api/v1/auth', authRoute)
app.use('/api/v1/category', categoryRoute)


export { app }