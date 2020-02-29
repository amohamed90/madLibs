import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
const INITIAL_STATE = {
  noun: "",
  noun2: "",
  adjective: "",
  color: ""
};

function MadlibForm({ createMadlib }) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    createMadlib({ ...formData, id: uuidv4() });
    setFormData(INITIAL_STATE);
  }

  return (
    <div className="MadlibForm">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="noun"
          value={formData.noun}
          id="noun"
          placeholder="noun"
          required
          /><br />
        <input
          onChange={handleChange}
          type="text"
          name="noun2"
          value={formData.noun2}
          id="noun2"
          placeholder="noun2"
          required
          /><br / >
        <input
          onChange={handleChange}
          type="text"
          name="adjective"
          value={formData.adjective}
          id="adjective"
          placeholder="adjective"
          required
          /><br / >
        <input
          onChange={handleChange}
          type="text"
          name="color"
          value={formData.color}
          id="color"
          placeholder="color"
          required
          /><br / >
        <button>Get Story</button>
      </form>
    </div>
  )

}

export default MadlibForm;