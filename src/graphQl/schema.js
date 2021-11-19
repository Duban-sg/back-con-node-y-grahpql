import { resolvers } from "./resolvers/resolvers";
import { makeExecutableSchema } from '@graphql-tools/schema'
import typeDefs from "./typeDefs"

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
