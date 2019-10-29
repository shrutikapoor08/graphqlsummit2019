import React, { Fragment, useState } from "react";

const More = ({ songs }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Fragment>
      <button
        className={"mui-btn mui-btn--fab"}
        onClick={() => setVisible(!visible)}
      > ... </button>
      {visible && (
        <div>
          <ul>
            {songs && songs.map(item => <li key={item.id}>{item.name} </li>)}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default More;
