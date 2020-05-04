const express = require('express')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema
} = require('graphql')

const app = express();

mongoose.connect("mongodb://localhost/mongodb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const PersonModel = mongoose.model("Person", {
    firstName: String,
    lastName: String
})

const PersonType = new GraphQLObjectType({
    name: 'Person',
    fields: {
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString }
    }
})

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: {
            people: {
                type: GraphQLList(PersonType),
                resolve: (root, args, context, info) => {
                    return PersonModel.find().exec();
                    // console.log(context.PersonModel)
                }
            },
            person: {
                type: PersonType,
                args: {
                    id: { type: GraphQLNonNull(GraphQLID) }
                },
                resolve: (root, args, context, info) => {
                    return PersonModel.findById(args.id).exec();
                }
            }
        }
    }),
    mutation: new GraphQLObjectType({
        name: "Mutation",
        fields: {
            person: {
                type: PersonType,
                args: {
                    firstName: { type: GraphQLNonNull(GraphQLString) },
                    lastName: { type: GraphQLNonNull(GraphQLString) }
                },
                resolve: (root, args, context, info) => {
                    var person = new PersonModel(args);
                    return person.save();
                }
            }
        }
    })
});

app.use("/graphql", expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('Listening at 3000...')
})