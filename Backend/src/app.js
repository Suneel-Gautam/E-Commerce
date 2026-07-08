import express from 'express'
import { configDotenv } from "dotenv"
import cookieParser from 'cookie-parser'
configDotenv()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(express.static('public'))
app.use(cookieParser())


export { app }