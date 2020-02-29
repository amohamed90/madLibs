import React from "react";

function Madlib({id, noun, noun2, adjective, color, reset}) {
  return (
    <div>
      {`There was a ${color} ${noun} who loved a ${adjective} ${color}`}<br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Madlib;
