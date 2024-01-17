const { gql } = require('apollo-server-express');

const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(commentId: ID!): Comment
    posts: [Post]
    post(postId: ID!): Post
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentText: String!): Comment
    removeComment(commentId: ID!): Comment
    createPost(content: String!): Post
    addReaction(postId: ID!, reactionType: ReactionType!): Post
  }

  # Existing types
  type User {
    _id: ID
    username: String
    email: String
    password: String
    comments: [Comment]
    posts: [Post]
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
    commentAuthor: String
    post: Post
  }

  type Auth {
    token: ID!
    user: User
  }

  # New types
  type Post {
    _id: ID!
    author: User!
    content: String!
    timestamp: Date!
    reactions: [Reaction!]
    comments: [Comment!]
  }

  type Reaction {
    _id: ID!
    user: User!
    type: ReactionType!
    post: Post!
  }

  enum ReactionType {
    LIKE
    LOVE
    LAUGH
    WOW
    SAD
    ANGRY
  }
`;

module.exports = typeDefs;
