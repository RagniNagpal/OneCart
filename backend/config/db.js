import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connect("process.env.MONGODB_URL");
    console.log("DB connected")
  }catch(err){
    console.log("DB error")
  }
}

export default connectDb