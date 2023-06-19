import gql from "graphql-tag";

export const bookSchema = gql`
  type Query {
    books: [Book!]!
  }

  type Mutation {
    createBook(
      name: String!
      year: Int!
      pages: Int!
      rating: Int!
      author: String!
      language: String!
    ): BookResponse!

    deleteBook(id: ID!): BookResponse!

    updateBook(
      id: ID!
      name: String
      year: Int
      pages: Int
      rating: Int
      language: String
    ): BookResponse!
  }

  type BookResponse {
    success: Boolean!
    message: String
  }

  type Book {
    id: ID!
    "the book's name"
    name: String
    "book release year"
    year: Int
    "number of pages"
    pages: Int
    "book rating"
    rating: Int
    "book's language"
    language: String
    "book author"
    authorId: ID
  }
`;
