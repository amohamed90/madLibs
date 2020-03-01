import React from 'react';
import './Madlib.css';
//https://www.npmjs.com/package/string-format
import format from 'string-format';

function Madlib({formData, story}) {
  
  return (
    <div className="Madlib">
      <div>{format(story, formData)}</div>
    </div>
  )
}

export default Madlib




