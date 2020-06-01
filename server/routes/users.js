import {Router} from "express";
import jwt from "jsonwebtoken";

import {getTokenFromHeader} from "../middlewares/helpers";
import {secretJwt} from "../config";

import User from "../models/User";

const router = Router();

/**
 * @swagger
 * /v1/api/users/all:
 *   get:
 *     tags:
 *       - Users
 *     description: Get all users
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: limit
 *         description: Query limit (optional).
 *         in: query
 *         required: false
 *         type: string
 *       - name: offset
 *         description: Query offset (optional).
 *         in: query
 *         required: false
 *         type: string
 *       - name: order
 *         description: Order string  (sort_field_name, sort_direction [DESC | ASC] ).
 *         in: query
 *         required: false
 *         type: string
 *         value: id,desc
 *     responses:
 *       201:
 *         description: Newly created user
 *       401:
 *         description: Create failed, user not authorized.
 *       400:
 *         description: Create failed, validate exception.
 */
router.get('/all',
async (req,res)=>{  
  try{
    const users = await User.find({})
    res.json({users})
  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

/**
 * @swagger
 * /v1/api/users/user/{id}:
 *   get:
 *     tags:
 *       - Users
 *     description: Get user by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: User id.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: User data
 *       401:
 *         description: Get failed, user not authorized.
 *       404:
 *         description: Get failed, entity not found.
 */
router.get('/user/:id',
async (req,res)=>{  
  const id = req.params.id;
  try{
    const user = await User.findOne({id})

    res.json({user})
  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

router.get('/account',
async (req,res)=>{  
  try{
    const userId = jwt.verify(getTokenFromHeader(req), secretJwt).userId;
    const user = await User.findById(userId) 
        
    if(!user){
      return res.status(400).json({message: "User not found"})
    }
    
    res.json({user})

  }catch (err) {
    res.status(500).json({message:"Error 500", errors: err})
  }
})

export default router;
