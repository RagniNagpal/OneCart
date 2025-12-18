import express from 'express'

let port=8000;
let app=express();

app.get("/",(req,res)=>{
  res.send("hello from server");
})

app.listen(port,()=>{
  console.log("hello from server")
})