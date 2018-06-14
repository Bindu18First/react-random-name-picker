import React from "react";

const RandomClick = props => {
  console.log('RandomClick',props);
  return (
    <div>
      <button onClick={props.handleClick}>get lucky winner!</button>
    </div>
  );
};

export default RandomClick;
