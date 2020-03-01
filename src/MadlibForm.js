import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './MadlibForm.css'


function MadlibForm({ createMadlib }) {

  const INITIAL_STATE = {
    noun: "",
    noun2: "",
    adjective: "",
    color: ""
  };

  const [madLibFormData, setmadLibFormData] = useState(INITIAL_STATE);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setmadLibFormData(madLibFormData => ({
      ...madLibFormData,
      [name]: value
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    createMadlib({ ...madLibFormData, id: uuidv4() });
    setmadLibFormData(INITIAL_STATE);
  }

  return (
    <div className="MadlibForm">
      <form className="form-group" onSubmit={handleSubmit}>
        <input className="form-control"
          onChange={handleChange}
          type="text"
          name="noun"
          value={madLibFormData.noun}
          id="noun"
          placeholder="noun"
          required
          /><br />
        <input className="form-control"
          onChange={handleChange}
          type="text"
          name="noun2"
          value={madLibFormData.noun2}
          id="noun2"
          placeholder="noun2"
          required
          /><br / >
        <input className="form-control"
          onChange={handleChange}
          type="text"
          name="adjective"
          value={madLibFormData.adjective}
          id="adjective"
          placeholder="adjective"
          required
          /><br / >
        <input className="form-control"
          onChange={handleChange}
          type="text"
          name="color"
          value={madLibFormData.color}
          id="color"
          placeholder="color"
          required
          /><br / >
        <button className="btn btn-info">Get Story</button>
      </form>
    </div>
  )

}

export default MadlibForm;