import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const fileUpload = async (localfilePath) => {
    try {
        const response = await cloudinary.uploader.upload(localfilePath, {
            resource_type: "auto"
        })
        fs.unlinkSync(localfilePath)
        return response.url

    } catch (error) {
        console.log(error)
        if (localfilePath && fs.existsSync(localfilePath)) {
            fs.unlinkSync(localfilePath)
        }
        return null;
    }
}

export { fileUpload }
