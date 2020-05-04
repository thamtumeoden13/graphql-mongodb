const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongo = require('mongoose');

const app = express();
mongo.connect('mongodb+srv://admin:<admin>@cluster0-aj6ij.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongo.connection.once('open', () => {
    console.log('connected to database');
})


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin:<admin>@cluster0-aj6ij.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

// const app = express();



app.use('/graphiql', graphqlHTTP({ schema: require('./schema.js'), graphiql: true }));

app.listen(8080, () => {
    console.log('Server running succefully...')
})