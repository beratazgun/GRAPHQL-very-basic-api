import gql from "graphql-tag";

export const authorSchema = gql`
  type Query {
    authors: [Author!]!
  }

  type Mutation {
    createAuthor(name: String!): createAuthorResponse!
    deleteAuthor(id: ID!): deleteAuthorResponse!
    updateAuthor(id: ID!, name: String!): updateAuthorResponse!
  }

  type updateAuthorResponse {
    success: Boolean!
    message: String
  }

  type deleteAuthorResponse {
    success: Boolean!
    message: String
  }

  type createAuthorResponse {
    success: Boolean!
    message: String
    book: Book
  }

  type Author {
    id: ID!
    "author's name"
    name: String!
    "author's books"
    books: [Book!]
  }
`;
