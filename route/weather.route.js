import { Router } from "express"
import weather from "../controller/weather.controller.js";
import jwtVerify from "../middleware/jwtVerify.js";

const router = Router();

router.get('/:city',jwtVerify,weather.getinfo);




export default router;