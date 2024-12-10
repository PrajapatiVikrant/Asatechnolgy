import { Router } from "express"
import user_report from "../controller/userreport.controller.js";
import adminVerify from "../middleware/adminVerify.js";
import jwtVerify from "../middleware/jwtVerify.js";


const router = Router();

router.get('/',jwtVerify,adminVerify,user_report.getall);


export default router;