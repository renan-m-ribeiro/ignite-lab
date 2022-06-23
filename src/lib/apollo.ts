import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4otsa0f1a5u01w77ggo1w57/master',
    cache: new InMemoryCache()
})