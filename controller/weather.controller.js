import axios from "axios";
import sql from "../config/db.js";

const weather = {
    getinfo:async(req,res)=>{ 
        const {city} = req.params;
        const {email} = req.user;
       
        try {
            console.log(city)
            const data = await axios.get(`http://api.weatherstack.com/current?access_key=${process.env.WEATHER_ACCESS_KEY}&query=${city}`)
           await sql`INSERT INTO report (email,city) VALUES (${email}, ${city})`
            res.json(data.data)
            
        } catch (error) {
            res.json({
                status:false,
                message:error.message
            })
        }

    },

    
}

export default weather;