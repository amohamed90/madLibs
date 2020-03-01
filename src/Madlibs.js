import React, {useState} from 'react';
import MadlibForm from './MadlibForm';
import Madlib from './Madlib';
import './Madlibs.css';

function Madlibs() {
  const [selectedMadlib, setSelectedMadlib] = useState("random");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const templates = {
    random: {
      keys: ["noun", "noun2", "adjective", "color"],
      string: `There was a {color} {noun} who loved a {adjective} {color}`
      },
    halloween: {
      keys: ["holiday", "noun", "place", "person", "adjective", "body-part(plural)", "verb", "adjective2", "noun2", "food", "plural-noun"],
      string: `I can't believe it's already {holiday}! I can't wait to put on my
        {noun} and visit every {place} in my neighborhood. This year, I am going to
        dress up as (a) {person} with {adjective} {body-part(plural)}. Before I {verb}
        , I make sure to grab my {adjective2} {noun2} to hold all of my {food}. Finally,
        all of my {plural-noun} are ready to go!`
      },
    thanksgiving: {
      keys: ["noun", "color1", "color2", "noun2", "adjective", "noun3",
        "vegetable", "person", "verb", "adjective2", "vegetable2",
        "adjective3", "vegetable3", "noun4", "exclamation", "adjective4"
      ],
      string: `Fall has arrived with a chill in the {noun}. The leaves
        are turning {color1} and {color2}. Nigth time comes quicker, which
        usually means {noun2}! But today was a {adjective} day. My {noun3}
        went to the {vegetable} patch. The {person} took us on a hay {verb}
        to a big {adjective2} field. We all got to pick a {vegetable2} that
        was {adjective3}! Yes nigth comes quicker now that it's fall. But tonight
        my {vegetable3} sits by my {noun4}. {exclamation} what a {adjective4} day!`
      }
  }

  const reset = () => {
    setIsSubmitted(false);
  }

  const onSubmit = () => {
    setIsSubmitted(true);
  }

  const madlibForm = <MadlibForm setFormData={setFormData} keys={templates[selectedMadlib].keys} onSubmit={onSubmit}/>
  const madLibStory = <Madlib formData={formData} story={templates[selectedMadlib].string} />

  const handleChange = evt => {
    setSelectedMadlib(evt.target.value);
    setIsSubmitted(false);
  }

  return (
    <div className="Madlibs">
      <h1 className="Madlibs-h1">Madlibs!</h1>
      <select className="Madlibs-select form-control" onChange={evt => handleChange(evt)}>
        <option value="random">Random</option>
        <option value="halloween">Halloween</option>
        <option value="thanksgiving">Thanksgiving</option>
      </select>
      <div>{isSubmitted ? madLibStory : madlibForm}</div>
      <div>{isSubmitted ? <button className="btn btn-info" onClick={reset}>Reset</button> : ""}</div>
    </div>
  );
}

export default Madlibs