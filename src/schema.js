export const typeDefs = `#graphql
  type Query {
    reviews: [Review!]
    review(id: ID!): Review
    games: [Game!]
    game(id: ID!): Game
    authors: [Author!]
    author(id: ID!): Author
  }
  type Game {
    id: ID!
    title: String!
    platforms: [String!]!
    reviews: [Review!]
    author(id: ID!): Author
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
  type Mutation {
    addGame(game: AddGameInput!): Game
    updateGame(id: ID!, updates: UpdateGameInput!): Game
    deleteGame(id: ID!): [Game]
  }
  input AddGameInput {
    title: String!
    platforms: [String!]!
  }
  input UpdateGameInput {
    title: String
    platforms: [String!]
  }
`;