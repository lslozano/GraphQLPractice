const { gql } = require("apollo-server");

// Schema - Type definitions
const typeDefs = gql`

  type User {
    id: ID
    name: String
    lastName: String
    email: String
    created: String
  }

  input UserInput {
    name: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Query {
    obtainCourse: String
  }

  type Mutation {
    newUser(input: UserInput): User
  }
`;

module.exports = typeDefs;