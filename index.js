import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './db.js';
import { UserRouter } from './Router/user.js';

//env part
dotenv.config()
const PORT = process.env.PORT

//middleware
const app = express()
app.use(express.json())

app.use(cors())

//dbconnection
dbConnection()
//routers
app.use("/api/user",UserRouter)
//server connection
app.listen(PORT,()=>console.log(`localhost running under:${PORT}`))