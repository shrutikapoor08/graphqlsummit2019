import { ApolloClient } from 'apollo-client'
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { HttpLink } from "apollo-link-http/lib/index";
import { InMemoryCache } from "apollo-cache-inmemory/lib/index";


const httpLink = new HttpLink({
  uri:"https://b8vue.sse.codesandbox.io/"
});


const nathansClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


const useRelatedSongs = (name="Taylor Swift") => {
  const GET_RELATED_SONGS = gql `
query getRelatedSongs($name: String!)  {
  songs(name: $name) {
    id
    name
    album
    url
  }
}
`;
  const { data, loading, error } = useQuery (GET_RELATED_SONGS, {
    client:nathansClient,
    variables: {
      name: name
    }
  });

console.log(data, error, loading);
  return { data, error, loading };
};

export default useRelatedSongs;