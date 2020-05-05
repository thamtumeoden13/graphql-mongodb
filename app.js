const express = require('express')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const cors = require("cors");

const schema = require('./src/schema')

const app = express();
app.use(cors());

const mongoDB = "mongodb://localhost/mongodb"
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.Promise = global.Promise;

app.use("/graphql", expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Listening at 4000...')
})

const db = mongoose.connection;
//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));