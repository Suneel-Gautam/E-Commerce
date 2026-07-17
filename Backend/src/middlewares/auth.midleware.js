import { asyncHandler } from "../utils/asyncHandler.js"
import { Apiresponse } from "../utils/apiResponse.js"
import { ApiError } from '../utils/apiError.js'
import jwt from 'jsonwebtoken'

export const jwtVerify = asyncHandler((req, res, next) => {

    const token = req.cookies('accessToken') || req.header('Authorization').replace("Bearer ", "")

    if (!token) {
        throw new ApiError(
            400,
            "Token missing!! Please provide token"
        )
    }

    const decoded = jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET
    )

    if (!decoded) {
        throw new ApiError(
            403,
            "Invalid token!!"
        )
    }
    req.user = decoded._id
})