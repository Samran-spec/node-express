import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.json("api running CICD ")
})
app.listen('5000', () =>{
    console.log("Api running on port 5001")
})
