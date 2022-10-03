const express = require("express");
const { ApolloServer } = require('apollo-server-express');

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

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ADD STATIC ASSETS HERE WHEN READY TO INTEGRATE

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});