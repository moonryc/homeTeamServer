import express from "express";
import addPlayerRouter from "./addPlayer.js";

const apiRouter = express.Router()


apiRouter.use('/addPlayer',addPlayerRouter)

export default apiRouter