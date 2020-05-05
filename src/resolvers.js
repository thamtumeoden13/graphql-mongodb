const graphql = require('graphql')

const Poster = require('./models/poster')
const Category = require('./models/category')
const { PosterType, CategoryType } = require('./schema')

const {
    GraphQLID,
    GraphQLBoolean,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLNonNull
} = graphql


const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        poster: {
            type: PosterType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Poster.findById(arg.id)
            }
        },
        posters: {
            type: GraphQLList(PosterType),
            resolve(parent, args) {
                return Poster.find({})
            }
        },
        category: {
            type: CategoryType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Category.findById(arg.id)
            }
        },
        categories: {
            type: GraphQLList(CategoryType),
            resolve(parent, args) {
                return Category.find({})
            }
        },
    }
})


module.exports = new GraphQLSchema({
    query: Query
});