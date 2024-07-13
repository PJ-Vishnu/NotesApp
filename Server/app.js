import express from "express"
import dotenv from "dotenv";

// cors configuration
import cors from "cors"

// mongodb connection
import { connectMongoDB } from "./db/database.js"
import notes from "../Server/routes/notes.js";



const app = express()

app.use(express.static('uploads'))
// env configuration
dotenv.config()

// config json 
app.use(express.json())
app.use(cors())

// route for user ,company registration api
app.use('/notes', notes)



//uploaded files
app.use('/uploads', express.static('uploads'));



// test api
app.get('/test',(req,res)=>{
    res.json({message:'Server working!'})
})


// server listing
app.listen(process.env.PORT,()=>{
    connectMongoDB()
    console.log(`Server running on PORT : http://localhost:${process.env.PORT}`);
})