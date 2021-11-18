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

const posterSchema = new Schema({
    name: String,
    tile: String,
    content: String,
    // categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
    posters: { type: new GraphQLObjectType(CategoryType) },
})
module.exports = mongoose.model('Poster', posterSchema)