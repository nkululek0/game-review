export const typeDefs = `#graphql
  type Query {
    reviews: [Review!]
    review(id: ID!): Review
    games: [Game!]
    game(id: ID!): Game
    authors: [Author!]
    author(id: ID!): Author
  }
  type Mutation {
    addGame(game: AddGameInput!): Game
    deleteGame(id: ID!): [Game]
  }
  type Game {
    id: ID!
    title: String!
    platforms: [String!]!
    reviews: [Review!]
  }
  type Author {
    id: ID!
    name: String!
    isVerified: Boolean!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    content: String!
    rating: Int!
    game: Game!
    author: Author!
  }
  input AddGameInput {
    title: String!
    platforms: [String!]!
  }
`;