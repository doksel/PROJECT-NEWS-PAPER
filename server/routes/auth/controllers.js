import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {validationResult} from "express-validator";

import {secretJwt} from "../../config";
import User from "../../models/Users";
import {sendMail} from "../../common/mailer"

export const signUp = async (req,res)=>{
  try{
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Data isn't correct by register"
      })
    }

    const {email, password, firstName, lastName}=req.body; 
    const candidate = await User.findOne({email})     
        
    if(candidate){
      return res.status(400).json({message: "Email is used"})
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({firstName, lastName, email, password: hashedPassword});

    await user.save();
    
    const dataEmail = {
      email,
      subject: 'Congratulations! You have registered on our "Site"!', 
      template: `Your email: ${user.email}
      Your password: ${password}`
    }
    
    sendMail(dataEmail);

    const dataAdminEmail = {
      email,
      subject: 'Congratulations! Another user registered on our "Site"!', 
      template: `
      name: ${user.firstName}
      lastName: ${user.lastName}
      email: ${user.email}
      password: ${password}`
    }

    sendMail(dataAdminEmail);
    
    res.status(201).json({message: "User was created"})

  }catch (err) {
    res.status(500).json({error:"Error 500", errors: err})
  }
}

export const signIn = async (req,res)=>{
  try{
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        error: "Enter into system isn't correct"
      })
    }

    const {email, password}=req.body;
    const user = await User.findOne({email});
    
    if(!user){
      return res.status(400).json({error: "User not found"})
    }

    const isMatch = await bcrypt.compare(password, user.password);
    
    if(!isMatch){
      return res.status(400).json({error: "Enter correct password"})
    }

    const token = jwt.sign(
      {userId: user.id},
      secretJwt,
      {expiresIn:"1h"}
    )

    res.json({token, userId: user.id})
  }catch (err) {
    res.status(500).json({error:"Error 500", errors: err})
  }
};

export const resetPassword = async (req,res)=>{
  try{
    if(!req.body.email){
      return res.status(400).json({error: "User not found"})
    }
    const {email}=req.body; 
    const user = await User.findOne({email});

    if(!user){
      return res.status(400).json({error: "Email is not found"})
    }

    const dataEmail = {
      email,
      subject: "Reset Password!", 
      template: `Your password: ${user.password}`
    }

    sendMail(dataEmail);

    res.json({reseted: true});
  }catch(err){
    res.status(500).json({error:"Error 500", errors: err})
  }
  
}