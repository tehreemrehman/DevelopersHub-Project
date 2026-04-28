import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";

export const registerAdmin = async (req,res)=>{
   try{
 const {email,password} = req.body;
 const hashedPassword = await bcrypt.hash(password,10);
 const admin= new Admin ({
    email,
    password:hashedPassword
 });
 await admin.save();
 res.json ({message: "Admin registered"});
} catch (error){
  res.status(500).json({ error: "Server error"});
 }
};

export const loginAdmin = async (req,res)=>{
   try{
const {email,password} = req.body;
 const admin= await Admin.findOne ({email});
 if (!admin){
    return res.status (400).json({message:"Admin not found"});
 }
 const isMatch= await bcrypt.compare(password,admin.password);
 if (!isMatch){
     return res.status (400).json({message:"Invalid credentials"});
 }
 const token = jwt.sign({id: admin._id},
    "secretkey",{
      expiresIn: "1d"
    });

 res.json ({ token });
   } catch(error){
      res.status(500).json({ error: "Server error"});
 }
};