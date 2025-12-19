import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js';

dotenv.config();
let port=process.env.PORT || 3000;

let app=express();

app.listen(port,()=>{
  console.log("Hello from server")
  connectDb()
})