const graphql = require('graphql')

const Poster = require('./models/poster')
const Category = require('./models/category')

const {
    GraphQLID,
    GraphQLBoolean,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLNonNull
} = graphql

const PosterType = new GraphQLObjectType({
    name: "Poster",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        category: {
            type: CategoryType,
            resolve(parent, args) {
                return Poster.findById(parent.categoryId)
            }
        }
    })
})

const CategoryType = new GraphQLObjectType({
    name: "Category",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        posters: {
            type: new GraphQLList(PosterType),
            resolve(parent, args) {
                return Poster.find({
                    categoryId: parent.id
                })
            }
        }
    })
})

module.exports = {
    PosterType,
    CategoryType
}