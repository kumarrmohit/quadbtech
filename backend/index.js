const express=require("express")
const {connection}=require("./config/db")
const {noteRouter} = require("./routes/post")
// app.use(express.json())
const cors=require("cors") 

const app=express()

app.use(express.json())

app.use(cors())


app.get("/",(req,res)=>{
    res.send("HOME PAGE") 
})

app.use('/quadb',noteRouter)

app.listen(4500,async()=>{
    try{
        await connection
    }
    catch(err){
        console.log(err.message)
    }
    console.log('server is running on port 4500')
})