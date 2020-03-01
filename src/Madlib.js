import React from "react";
import './Madlib.css'

function Madlib({id, noun, noun2, adjective, color, reset}) {
  return (
    <div className="Madlib">
      {`There was a ${color} ${noun} who loved a ${adjective} ${color}`}<br />
      <button className="btn btn-info" onClick={reset}>Reset</button>
    </div>
  );
}

export default Madlib;
