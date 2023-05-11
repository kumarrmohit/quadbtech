const express = require("express")
const fs=require("fs")
const { NoteModel } = require("../model/post.model")
const noteRouter = express.Router()

noteRouter.get("/",(req,res)=>{
    req.setHeader("Content-type","text/html")
    res.send("<h1>HOME PAGE</h1>")
})
noteRouter.get("/data",(req,res)=>{
    const dataStream=fs.createReadStream("./db.json","utf-8")
    dataStream.pipe(res)
})

module.exports={
    noteRouter
}