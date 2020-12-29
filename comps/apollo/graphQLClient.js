import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache();

export const graphQLClient = new ApolloClient({
  uri: "/api/graphql",
  cache,
});

export default graphQLClient;
