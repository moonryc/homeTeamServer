//env config
import dotenv from 'dotenv'
dotenv.config()

//1st party imports
import sequelize from "./config/connection.js";
import router from './routes/index.js'
import helpers from "./utils/helpers.js";

//3rd party imports
import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url';
import {create} from "express-handlebars";

const handlebars = create({ helpers });
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PORT = process.env.PORT || 3001
const app = express()

//Start listening and sync database
sequelize.sync({force:false}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`NOW LISTENING ON PORT: ${PORT}`)
    })
})

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.engine('handlebars',handlebars.engine)
app.set('view engine', 'handlebars')

//routes
app.use(router)