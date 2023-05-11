const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
    "name": String,
    "last": Number,
    "buy": Number,
    "sell": Number,
    "volume": Number,
    "base_unit": String
})
const NoteModel = mongoose.model("notes", noteSchema)

module.exports = {
    NoteModel
}