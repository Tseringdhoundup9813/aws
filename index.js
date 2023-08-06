const express = require("express");
require("dotenv").config();

const app = express()

const port = process.env.PORT||3000

app.get('/',(req,res)=>{
    res.send("<h1>hello tsering you are doing great</h1>")
})
app.get("/api",(req,res)=>{
    res.send("learning how to deploy node js to aws ")
})
app.get("/api/user",(req,res)=>{
    res.send("user name is tsering")
})
app.listen(port,()=>{
    console.log(`server is listening on ${port}`)
})

