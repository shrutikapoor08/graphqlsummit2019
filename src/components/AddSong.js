import React, { useState, useContext } from "react";
import { ADD_SONG } from "../graphql/mutations";
import Context from "../context";
import { useMutation } from "@apollo/react-hooks";

const AddSong = () => {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [lyrics, setLyrics] = useState("");
  const { dispatch } = useContext(Context);
  const [addSong] = useMutation(ADD_SONG);
  //   const test  = useStreamingLyrics("test");

  return (
    <form
      className={"mui-form"}
      onSubmit={e => {
        e.preventDefault();
        addSong({
          variables: {
            song: {
              name,
              artist,
              lyrics
            }
          }
        });
        const songs = [{ name, artist, lyrics }];
        dispatch({ type: "ADD_CONTENT", payload: songs });
        setName("");
        setLyrics("");
        setArtist("");
      }}
    >
      <legend>Add a new song</legend>
      <div className={"mui-textfield mui-textfield--float-label width-small"}>
        <input
          value={name}
          type="text"
          name="name"
          onChange={e => setName(e.target.value)}
        />
        <label>Name</label>
      </div>
      <div className="mui-textfield mui-textfield--float-label width-small">
        <input
          value={artist}
          type="text"
          name="artist"
          onChange={e => setArtist(e.target.value)}
        />
        <label>Artist</label>
      </div>
      <div className="mui-textfield mui-textfield--float-label">
        <textarea
          value={lyrics}
          type="text"
          name="lyrics"
          onChange={e => setLyrics(e.target.value)}
        />
        <label>Lyrics</label>
      </div>
      <button
        className={`mui-btn mui-btn--raised mui-btn--primary`}
        type="submit"
      >
        Add Song
      </button>
    </form>
  );
};

export default AddSong;
