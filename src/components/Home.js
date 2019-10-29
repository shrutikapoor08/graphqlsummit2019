import React, { useEffect, useContext} from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_SONGS } from '../graphql/queries'

import Container from "muicss/lib/react/container";
import AddSong from './AddSong';
import SongItem from './SongItem'

import Context from '../context'

const Home = () => {
  const {state, dispatch} = useContext(Context);
  const { data, loading, error } = useQuery(GET_SONGS);

  useEffect(() => {
    if(data && data.songs) {
      dispatch({type: "ADD_CONTENT", payload: data.songs});
    }
  }, [data]);

    if (error) return <h1>Error fetching songs </h1>;
    if (loading)  return <h2>Loading posts...</h2>;

      return (
        <Container>
          <AddSong/>
          <div className={`song-container`}>
            {state && state.songs && state.songs.map(song => (
              <div key={`song-${song.id}`} className={'song-list-item'}>
                <SongItem song = { song } />
              </div>
            ))}
          </div>
        </Container>
      );
  };

export default Home;