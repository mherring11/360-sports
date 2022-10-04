const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        items: [Item]
        cart: [Item]
    }
    
    type Item {
        _id: ID
        itemName: String
        description: String
        condition: String
        tags: [String]
    }
    
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        items: [Item]
        item(_id: ID!): Item
        itemsByTag(tags: [String]!): [Item]
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addItem(itemName: String!, description: String!, condition: String!, tags: [String!]): Item
        removeItem(_id: ID!): Item
    }`
;

module.exports = typeDefs;