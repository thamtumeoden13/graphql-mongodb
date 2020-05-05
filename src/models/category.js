const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: String,
    tile: String,
    content: String,
    posters: [{ type: Schema.Types.ObjectId, ref: 'Poster' }]
})
module.exports = mongoose.model('Category', categorySchema)