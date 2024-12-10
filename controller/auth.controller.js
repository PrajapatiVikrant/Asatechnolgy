import sql from "../config/db.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const auth = {

    signup:async(req,res)=>{
       const {email, password} = req.query;
       try {
           if(!email || !password){
            return res.json({
                message:"all field are required"
            })
           }
           const data = await sql`SELECT * FROM auth WHERE email=${email}`;
           console.log(data)
           if(data[0]){
            return res.json({
                message:'user already exist'
            })
           }
           const hashpassword = await bcrypt.hash(password,10)
           await sql`INSERT INTO auth (email,password) VALUES (${email},${hashpassword})`
           return res.json({
            message:"Sign up successfully"
           })


       } catch (error) {
        console.log(error)
            return res.json({
                message:"somthing went wrong"
            })
       }
    },


    login:async(req,res)=>{
        const {email,password} = req.query;
        try {
            const data = await sql`SELECT * FROM auth WHERE email=${email}`;
            console.log(data)
            if(!data[0]){
                return res.json({
                    message:"You are not exist"
                })
            }
            const matchPassword = await bcrypt.compare(password,data[0].password);
            if(!matchPassword){
                return res.json({
                    message:"wrong password"
                })
            }
            const token = await jwt.sign({email},process.env.JWT_SECRET,{ expiresIn: '1h' })
            return res.json({
                message:"Login successfully",
                token:token
            })
        } catch (error) {
            
        }
    }
}
export default auth;