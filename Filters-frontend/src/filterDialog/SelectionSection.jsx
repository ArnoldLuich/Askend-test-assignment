import React from 'react';
import './SelectionSection.css';

const SelectionSection = ({ selection, setSelection }) => {
  return (
    <div className="selection-section">
      <h3>Select an Option</h3>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selection === 'option1'}
          onChange={(e) => setSelection(e.target.value)}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={selection === 'option2'}
          onChange={(e) => setSelection(e.target.value)}
        />
        Option 2
      </label>
      <label>
        <input
          type="radio"
          value="option3"
          checked={selection === 'option3'}
          onChange={(e) => setSelection(e.target.value)}
        />
        Option 3
      </label>
    </div>
  );
};

export default SelectionSection;