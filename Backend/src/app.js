import express from 'express'
import { configDotenv } from "dotenv"
import cookieParser from 'cookie-parser'
import cors from 'cors'
configDotenv()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(express.static('public'))
app.use(cookieParser())


export { app }