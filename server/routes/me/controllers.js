import jwt from "jsonwebtoken";

import {getTokenFromHeader} from "../../middlewares/helpers";
import {secretJwt} from "../../config";

import User from "../../models/Users";

export const me = async (req,res)=>{  
  try{
    const userId = jwt.verify(getTokenFromHeader(req), secretJwt).userId;
    const user = await User.findById(userId) 
        
    if(!user){
      return res.status(400).json({error: "User not found"})
    }
    
    res.json({profile: user})

  }catch (err) {
    res.status(500).json({error:"Error 500", errors: err})
  }
};

export const editProfile = async (req,res)=>{  
  try{
    const userId = jwt.verify(getTokenFromHeader(req), secretJwt).userId;
    const { firstName, lastName, email} = req.body;
    const newProfile = {firstName, lastName, email};
    const user = await User.findOneAndUpdate(userId, newProfile , {new: true}); 
        
    if(!user){
      return res.status(400).json({error: "User not found"})
    }
    
    res.json({profile: user})

  }catch (err) {
    res.status(500).json({error:"Error 500", errors: err})
  }
}