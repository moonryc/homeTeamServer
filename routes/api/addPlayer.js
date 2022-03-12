import express from "express";
import {Search} from "../../models/index.js";
import sequelize from "../../config/connection.js";


const addPlayerRouter = express.Router()



addPlayerRouter.get('/:player_search', async (req, res) => {

    try {
        const search = req.params.player_search.replace('%20', ' ')

        const document = await Search.create({
            search: search
        })

        if (!document) {
            return res.status(500).json({message: 'Error saving data'})
        }

        return res.sendStatus(200)

    } catch (e) {
        return res.status(500).json({message: 'Error', error: e})
    }
})


export default addPlayerRouter;