import express from "express";
import sequelize from "../config/connection.js";

const homeRoutesRouter = express.Router()


homeRoutesRouter.get('/',async (req,res)=>{
    try{
        const [results] = await sequelize.query('SELECT search as player, COUNT(search) AS count FROM search GROUP BY search ORDER BY count DESC',);

        if (!results) {
            return res.status(500).json({message: "no searches found"})
        }


        res.render('homepage',{results})

    }catch (e) {
        console.log("catch error")
        console.log(e)
        return res.status(500).json({message: e})
    }
})

export default homeRoutesRouter


