import express from "express";
import apiRouter from "./api/index.js";
import homeRoutesRouter from "./home-routes.js";

const router = express.Router()

router.use('/',homeRoutesRouter)
router.use('/api',apiRouter)

export default router;