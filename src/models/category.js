const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: String,
    tile: String,
    content: String
})
module.exports = mongoose.model('Category', categorySchema)