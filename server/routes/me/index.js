import {Router} from "express";
import jwt from "jsonwebtoken";

import {getTokenFromHeader} from "../../middlewares/helpers";
import {secretJwt} from "../../config";

import User from "../../models/Users";

const router = Router();

router.get('/',
async (req,res)=>{  
  try{
    const userId = jwt.verify(getTokenFromHeader(req), secretJwt).userId;
    const user = await User.findById(userId) 
        
    if(!user){
      return res.status(400).json({message: "User not found"})
    }
    
    res.json({profile: user})

  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

export default router;