/*
    server.js
    Strider
    Documented on 10/06/2022
    
    Description:
      This file initializes the Apollo/express server
    
    Documentation:
      No documentation provided.
*/

const express = require("express");
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { generateToken } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3005;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: generateToken
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ADD STATIC ASSETS HERE WHEN READY TO INTEGRATE
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

}

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};
    
// Call the async function to start the server
startApolloServer(typeDefs, resolvers);