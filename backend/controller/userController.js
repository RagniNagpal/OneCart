import User from "../model/userModel"


export const getCurrentUser = async(params)=>{
  try{
    let user=await User.findById(req.userId)
    if(!user){
      return resizeBy.status(404).json(user)
    }
    return res.status(200).json(user)
  }catch(error){
    console.log(error)
    return res.status(500).json({message:`getCurrentUser error ${error}`})
  }
}