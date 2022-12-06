const { gql } = require('apollo-server-express');


 const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        comments: [Comment]
    }
    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        commentAuthor: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        comments(username: String): [Comment]
        comment(commentId: ID!): Comment
    }
    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addComment(commentText: String!): Comment
        removeComment(commentId: ID!): Comment
    }
`;

module.exports = typeDefs;