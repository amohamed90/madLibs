import React from 'react';
import './MadlibForm.css';

function MadlibForm({ setFormData, keys, onSubmit }) {

  const handleSubmit = evt => {
    evt.preventDefault();
    //https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
    const formData = new FormData(evt.target);
    //https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries
    let madLibData = {};
    for (let pair of formData.entries()) {
      madLibData[pair[0]] = pair[1];
    }
    setFormData(madLibData);
    onSubmit();
  }


  return (
    <div className="MadlibForm">
      <form className="form-group" onSubmit={handleSubmit}>
        {keys.map((key, i) =>
        <div key={i}>
          <input
          className="form-control"
          type="text"
          name={key}
          id={key}
          placeholder={key}
          required
          />
        </div>
        )}
        <button className="btn btn-info">Get Story</button>
      </form>
    </div>
  )
}

export default MadlibForm
