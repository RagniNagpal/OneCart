import User from "../model/userModel.js";
import validator from "validator"
import bcrypt from "bcryptjs"

export const register = async(req,res)=>{
  try{
    const {name,email,password}=req.body;
    const existUser = await User.findOne({email});
    if(existUser){
      return res.status(400).json({message:"User already exist"})
    }
    if(validator.isEmail(email)){
      return res.status(400).json({message:"Enter Valid Email"})
    }
    if(password.length < 0){
      return res.status(400).json({message:"Enter Strong Password"})
    }
    let hashPassword = await bcrypt.hash(password,10)
    const user=await User.create({name,email,password : hashPassword})
    } catch(error){

    }
}