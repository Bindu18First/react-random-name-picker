import React from "react";
const ListBuilder = props => {
  return (
    <div>
      <ul>
        {props.list.map((value, i) => {
          return props.luckyWinnerIndex === i ? (
            <li id="winner" key={i}>
              {" "}
              {value}
            </li>
          ) : (
            <li key={i}> {value}</li> //used ternary operator
          );
        })}
      </ul>
    </div>
  );
};

export default ListBuilder;
