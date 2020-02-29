import React, {useState} from 'react';
import MadlibForm from './MadlibForm';
import Madlib from './Madlib'
import './Madlibs.css';

function Madlibs() {
  const [madLib, setMadlib] = useState({});

  const create = madLibObj => {
    setMadlib(madLibObj);
  }

  const reset = () => {
    setMadlib({});
  }

  const madLibStory =
    <Madlib
      key={madLib.id}
      id={madLib.id}
      noun={madLib.noun}
      noun2={madLib.noun2}
      adjective={madLib.adjective}
      color={madLib.color}
      reset={reset}
      />

  const madlibForm = <MadlibForm createMadlib={ create }/>
  const length = Object.keys(madLib).length > 0;

  return (
    <div className="Madlib">
      <h1>Madlibs!</h1>
      <div>{length ? madLibStory : madlibForm}</div>
      {/* <div>{length ? resetButton : ""}</div> */}
    </div>
  );
}

export default Madlibs