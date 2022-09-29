const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        itemlist: [Item]
    }
    
    type Item {
        _id: ID
        title: String
        description: String
        Condition: String
        tag: [Tag]
    }
    
    type Tag {
    }`