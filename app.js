const express = require('express')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')

const schema = require('./src/resolvers')

const app = express();

mongoose.connect("mongodb://localhost/mongodb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use("/graphql", expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Listening at 4000...')
})