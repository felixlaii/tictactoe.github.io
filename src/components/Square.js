import React from "react";

function Square({ clickedArray, handleClick }) {
  return (
    <div className={"square"} {...props}>
      {props.x ? "x" : props.o ? "o" : ""}
    </div>
  );
}

export default Square;
