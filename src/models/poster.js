const mongoose = require('mongoose')
const Schema = mongoose.Schema

const posterSchema = new Schema({
    name: String,
    tile: String,
    content: String,
    categoryId: String
})
module.exports = mongoose.model('Poster', posterSchema)