const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { PosterType, CategoryType } = require('../typeDefs')

const {
    GraphQLID,
    GraphQLBoolean,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLNonNull
} = graphql


const categorySchema = new Schema({
    name: String,
    tile: String,
    content: String,
    posters: { type: new GraphQLList(PosterType) },
    // posters: [{ type: Schema.Types.ObjectId, ref: 'Poster' }]
})
module.exports = mongoose.model('Category', categorySchema)