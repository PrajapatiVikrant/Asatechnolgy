import { Router } from "express"
import auth from "../controller/auth.controller.js";


const router = Router();

router.post('/login',auth.login);
router.post('/signup',auth.signup)




export default router;