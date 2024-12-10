import { config } from "dotenv";
config()
const adminVerify = (req,res,next)=>{
    const {email} = req.user;
    console.log(email+'==='+process.env.ADMIN_EMAIL)
    if(email == process.env.ADMIN_EMAIL){
        next();
    }else{
        return res.send('Not access, Only admin can access this')
    }
}
export default adminVerify;