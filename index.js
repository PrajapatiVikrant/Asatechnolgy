import express from "express"
import { config } from "dotenv";
import cors from "cors"
import weatherRoute from "./route/weather.route.js"
import authRoute from "./route/auth.route.js"
import reportRoute from "./route/userreport.route.js"
config()
const app = express();
app.use(cors())
const Port = process.env.PORT || 3000

app.use('/weather',weatherRoute)
app.use('/auth',authRoute)
app.use('/report',reportRoute)

app.listen(Port,()=>{
    console.log(`server listen at http://localhost:${Port}`)
})