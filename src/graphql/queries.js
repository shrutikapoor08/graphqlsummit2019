import gql from "graphql-tag";

export const GET_SONGS = gql`
  query albums($artist: String) {
    songs(where: { artist: $artist }) {
      name
      id
      artist
      lyrics
    }
  }
`;
