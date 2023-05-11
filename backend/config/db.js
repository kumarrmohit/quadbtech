const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://mohit:mohit@cluster0.bbvtzrr.mongodb.net/Quadb?retryWrites=true&w=majority")

module.exports={
    connection
}