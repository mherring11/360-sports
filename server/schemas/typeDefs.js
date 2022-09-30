const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        items: [Item]
    }
    
    type Item {
        _id: ID
        itemName: String
        description: String
        Condition: String
        tag: [Tag]
    }
    
    type Tag {
        _id: ID
        sport: String
    }
    
    type Query {
        users: [User]
        user(username: String!): User
        items(username: String!): [Item]
        item(_id: ID!): Item
    }`