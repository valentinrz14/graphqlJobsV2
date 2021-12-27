import { ApolloClient } from '@apollo/client';
import { getMemoryCache } from './cache';
import { getResolvers } from './resolvers';
// Connection API
export const Client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: getMemoryCache,
  resolvers: getResolvers,
});
