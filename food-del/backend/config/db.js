import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rijulrojio:12345@cluster0.vvqp2.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}