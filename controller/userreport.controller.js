import sql from "../config/db.js"
const user_report = {
    getall:async(req,res)=>{
        try {
            const data = await sql`SELECT * FROM report`;
        return res.json({
            message:data
        })
        } catch (error) {
            return res.send('somthing went wrong')
        }
       
    }
}
export default user_report;