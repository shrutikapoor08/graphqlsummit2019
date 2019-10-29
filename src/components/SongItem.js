import Delete from './Delete';

import React, { useContext } from "react";
import { useMutation } from '@apollo/react-hooks';
import { DELETE_SONG } from '../graphql/mutations';
import Context from '../context';

const SongItem = ({ song }) => {
  const [deleteSong, { data, error} ] = useMutation(DELETE_SONG);
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
    </div>
  )

};

export default SongItem