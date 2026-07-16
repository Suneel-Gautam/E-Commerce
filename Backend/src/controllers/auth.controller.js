import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from '../utils/apiError.js'
import { fileUpload } from "../utils/cloudinary.js";
import { Apiresponse } from '../utils/apiResponse.js'

const register = asyncHandler(async (req, res) => {
    const { username, email, phone, password } = req.body

    if (!username.trim() || !email.trim() || !phone.trim() || !password.trim()) {
        throw new ApiError(
            400,
            "Please provide all the missing fields"
        )
    }
    const profilePicPath = req.file?.path
    if (profilePicPath) {
        const response = await fileUpload(profilePicPath)
    }
    if (!response) {
        throw new ApiError(
            403,
            "Failed to upload on server"
        )
    }
    const user = await User.create({
        username,
        email,
        phone,
        password,
        profilePic: response || null
    }).select('-password')


    return res.status(201).json(
        new Apiresponse(
            200,
            user,
            "User Created SucessFully"

        )
    )
})

export { register }