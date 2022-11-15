const express = require('express')
const app=express()

app.get('/', (req,res)=>{
    res.send("Server Ok")
})

app.listen(3000, ()=>{
    console.log('Running server port:3000')
})