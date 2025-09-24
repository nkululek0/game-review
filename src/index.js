import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";

const server = new ApolloServer({
  typeDefs: typeDefs
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 8080 },
});

console.log(`GraphQL Server ready at: ${ url }`);