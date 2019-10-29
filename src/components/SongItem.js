import Delete from './Delete';
import More from './More';

import React, { useContext } from "react";
import { useMutation } from '@apollo/react-hooks';
import { DELETE_SONG } from '../graphql/mutations';
import Context from '../context';
import useRelatedSongs from "../graphql/useRelatedSongs";

const SongItem = ({ song }) => {
  const { data, error, loading } = useRelatedSongs(song.artist);
  const [deleteSong] = useMutation(DELETE_SONG);
  if (error) return ( <div> Something went wrong </div>);

  const { dispatch } = useContext(Context);

  const deleteMutation = () => {
    deleteSong({
      variables: {
        id: {
          id: song.id
        }
      }
    });

    dispatch({ type: "DELETE_CONTENT", payload: song.id });

  };


  return (
    <div className={'text-wrapper'}>
      <h1>{song.name}</h1>
      <h3>{song.artist}</h3>
      <p>{song.lyrics}</p>
      <Delete onClick={deleteMutation}/>
      {!loading && data && <More songs = {data.songs} />}
    </div>
  )

};

export default SongItem