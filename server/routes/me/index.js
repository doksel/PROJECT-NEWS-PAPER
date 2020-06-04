import {Router} from "express";
import jwt from "jsonwebtoken";

import {getTokenFromHeader} from "../../middlewares/helpers";
import {secretJwt} from "../../config";

import User from "../../models/Users";

const router = Router();

/**
 * @swagger
 * /v1/api/me:
 *   get:
 *     tags:
 *       - Me
 *     description: Get your account
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: User data
 *       401:
 *         description: Get failed, user not authorized.
 *       404:
 *         description: Get failed, entity not found.
 */
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
}),

/**
 * @swagger
 * /v1/api/me/edit:
 *   patch:
 *     tags:
 *       - Me
 *     description: Edit your account
 *     produces:
 *       - application/json
 *     parameters:
 *       - firstName: id
 *         description: Certification id.
 *         in: path
 *         required: true
 *         type: string
 *       - laststName: id
 *         description: Certification id.
 *         in: path
 *         required: true
 *         type: string
 *       - email: id
 *         description: Certification id.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: Updated certification
 *       401:
 *         description: Update failed, user not authorized.
 *       404:
 *         description: Update failed, entity not found.
 *       400:
 *         description: Update failed, validate exception.
 */
router.put('/edit',
async (req,res)=>{  
  try{
    const userId = jwt.verify(getTokenFromHeader(req), secretJwt).userId;
    const { firstName, lastName, email} = req.body;
    const newProfile = {firstName, lastName, email};
    const user = await User.findOneAndUpdate(userId, newProfile , {new: true}); 
        
    if(!user){
      return res.status(400).json({message: "User not found"})
    }
    
    res.json({profile: user})

  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})


export default router;