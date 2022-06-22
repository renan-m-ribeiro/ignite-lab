import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://app.graphcms.com/abe20ed5f4b5439c90d41a45c6d694bf/master',
    cache: new InMemoryCache()
})