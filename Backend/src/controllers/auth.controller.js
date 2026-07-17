import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from '../utils/apiError.js'
import { fileUpload } from "../utils/cloudinary.js";
import { Apiresponse } from '../utils/apiResponse.js'


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
    if (profilePicPath) {
        const response = await fileUpload(profilePicPath)
    }
    if (!response) {
        throw new ApiError(
            403,
            "Failed to upload image on server"
        )
    }
    const user = await User.create({
        username,
        email,
        phone,
        password,
        profilePic: response || null
    }).select('-password -refreshToken')

    if (!user) {
        throw new ApiError(
            400,
            "Failed to create user"
        )
    }
    const { accessToken, refreshToken } = await generateAccessTokenRefreshToken(user_.id)

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
                    user,
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
    const isPasswordCorrect = await user.isPasswordCorrect(user.password)
    if (!isPasswordCorrect) {
        throw new ApiError(
            403,
            "Invalid Credentails"
        )
    }
    const { accessToken, refreshToken } = await generateAccessTokenRefreshToken(user_.id)
    const loginUser = user.select('-password -refreshToken')
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
                    loginUser,
                    accessToken,
                    refreshToken
                },
                "User Created SucessFully"
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
        {
            new: true
        }
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

    res.status(200)
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

})

const editProfile = asyncHandler(async (req, res) => {

    const { username, phone } = req.body

    const profilePic = req.profilePic.path

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
            new: true
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

export {
    register,
    login,
    logout,
    changePassword,
    editProfile
}