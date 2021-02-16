const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin requests
app.use(cors());

mongoose.connect(
  'mongodb+srv://saifm:google1234@cluster0.weggc.mongodb.net/gql-books?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('!!!!connected to db!!!!')
});


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(3003, () => {
  console.log('running on port 3000')
});