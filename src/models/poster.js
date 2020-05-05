const mongoose = require('mongoose')
const Schema = mongoose.Schema

const posterSchema = new Schema({
    name: String,
    tile: String,
    content: String,
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
})
module.exports = mongoose.model('Poster', posterSchema)