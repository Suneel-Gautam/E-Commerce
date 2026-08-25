import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from '../utils/apiError.js'
import { fileUpload } from "../utils/cloudinary.js";
import { Apiresponse } from '../utils/apiResponse.js'
import { jwtVerify } from "../middlewares/auth.midleware.js";
import jwt from 'jsonwebtoken'

const generateAccessTokenRefreshToken = async function (userId) {

    const user = await User.findById(userId)
    if (!user) {
        throw new ApiError(
            404,
            "User not found"
        )
    }
    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()
    user.refreshToken = refreshToken
    await user.save({ validateBeforeSave: false })
    return { accessToken, refreshToken }
}

const register = asyncHandler(async (req, res) => {
    const { username, email, phone, password } = req.body

    if (!username.trim() || !email.trim() || !phone.trim() || !password.trim()) {
        throw new ApiError(
            400,
            "Please provide all the missing fields"
        )
    }
    const profilePicPath = req.file?.path

    let response = await fileUpload(profilePicPath)

    const user = await User.create({
        username,
        email,
        phone,
        password,
        profilePic: response || ""
    })

    if (!user) {
        throw new ApiError(
            400,
            "Failed to create user"
        )
    }
    const { accessToken, refreshToken } = await generateAccessTokenRefreshToken(user._id)

    const registerUser = await User.findById(user._id).select('-password -refreshToken')

    const options = {
        httpOnly: true,
        secure: true
    }
    return res.status(201)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new Apiresponse(
                200,
                {
                    user: registerUser,
                    accessToken,
                    refreshToken
                },
                "User Created SucessFully"
            )
        )
})

const login = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body
    if (!(username || email)) {
        throw new ApiError(
            400,
            "Provide either username or email!!"
        )
    }
    const user = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (!user) {
        throw new ApiError(
            404,
            "User not found with username or email"
        )
    }
    const isPasswordCorrect = await user.isPasswordCorrect(password)
    if (!isPasswordCorrect) {
        throw new ApiError(
            403,
            "Invalid Credentails"
        )
    }
    const { accessToken, refreshToken } = await generateAccessTokenRefreshToken(user._id)
    const loginUser = await User.findById(user._id).select('-password -refreshToken')
    const options = {
        httpOnly: true,
        secure: true
    }
    return res.status(201)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new Apiresponse(
                200,
                {
                    user: loginUser,
                    accessToken,
                    refreshToken
                },
                "User login SucessFully"
            )
        )
})

const logout = asyncHandler(async (req, res) => {

    const user = await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: null
            }
        },
        { returnDocument: "after" }
    )
    if (!user) {
        throw new ApiError(
            404,
            "User not found"
        )
    }

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(
            new Apiresponse(
                200,
                {},
                "Logout Sucessfully!!"
            )
        )
})

const changePassword = asyncHandler(async (req, res) => {

    const { oldpassword, newPassword } = req.body
    if (!oldpassword || !newPassword) {
        throw new ApiError(
            401,
            "Please provide oldpassword and newpassword!! "
        )
    }
    const user = await User.findById(
        req.user._id
    )
    if (!user) {
        throw new ApiError(
            404,
            "User not found"
        )
    }

    const isPasswordCorrect = await user.isPasswordCorrect(oldpassword)

    if (!isPasswordCorrect) {
        throw new ApiError(
            403,
            "Old password is incorrect!!"
        )
    }
    user.password = newPassword
    await user.save({ validateBeforeSave: false })

    const loginedUser = await User.findById(user._id).select('-password -refreshToken')

    return res.status(200).json(
        new Apiresponse(
            200,
            {
                user: loginedUser
            },
            "PasswordChanged Sucessfully!!!"
        )
    )
})

const editProfile = asyncHandler(async (req, res) => {
    const { username, phone } = req.body
    const profilePic = req.file?.profilePic.path
    const filterdUpdate = {}
    if (username.trim()) {
        filterdUpdate.username = username
    }
    if (phone) {
        filterdUpdate.phone = phone
    }
    if (profilePic) {
        filterdUpdate.profilePic = profilePic
    }
    const user = await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: filterdUpdate
        },
        {
            returnDocument: "after"
        }
    ).select('-password -refreshToken')

    if (!user) {
        throw new ApiError(
            404,
            "User not found"
        )
    }

    return res.status(200).json(
        new Apiresponse(
            200,
            user,
            "User updated Sucessfully"
        )
    )
})

const createAccessAndRefreshToken = asyncHandler(async (req, res) => {
    const token = req.cookies?.refreshToken || req.body.refreshToken

    if (!token) {
        throw new ApiError(
            400,
            "Token missing!! please provide the token!!"
        )
    }
    const decoded = jwt.verify(
        token,
        process.env.REFRESH_TOKEN_SECRET
    )

    if (!decoded) {
        throw new ApiError(
            403,
            "Invalid Token !!!"
        )
    }

    const user = await User.findById(decoded._id)

    if (!user) {
        throw new ApiError(
            404,
            "User not found!!!"
        )
    }

    if (!(user.refreshToken === token)) {
        throw new ApiError(
            400,
            "Incorrect refresh token!!!"
        )

    }

    const { accessToken, refreshToken } = await generateAccessTokenRefreshToken(user._id)

    const logginedUser = await User.findById(user._id).select('-password -refreshToken')

    if (!logginedUser) {
        throw new ApiError(
            404,
            "User Not Found!!"
        )
    }


    const options = {
        httpOnly: true,
        secure: true
    }
    return res.status(200)
        .cookie('accessToken', accessToken, options)
        .cookie('refreshToken', refreshToken, options)
        .json(
            new Apiresponse(
                200,
                {
                    logginedUser,
                    accessToken,
                    refreshToken
                },
                "AccessToken Refreshed SucessFully"
            )
        )
})

export {
    register,
    login,
    logout,
    changePassword,
    editProfile,
    createAccessAndRefreshToken
}