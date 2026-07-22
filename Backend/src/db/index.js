import mongoose from "mongoose";
import { DATABASE_NAME } from "../contants.js";

const mongodbConnect = async function () {
    try {
        await mongoose.connect(`${process.env.MONGOURL}/${DATABASE_NAME}`).then(
            console.log("Connected to database Sucessfully")
        )
    } catch (error) {
        console.log("Connection Error", error.message)
        throw error
    }

}

export default mongodbConnect