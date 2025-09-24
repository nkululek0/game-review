export const typeDefs = `#graphql
  type Query {
    reviews: [Review!]
    games: [Game!]
    authors: [Author!]
  }
  type Game {
    id: ID!
    title: String!
    platforms: [String!]!
  }
  type Author {
    id: ID!
    name: String!
    isVerified: Boolean!
  }
  type Review {
    id: ID!
    content: String!
    rating: Int!
  }
`;