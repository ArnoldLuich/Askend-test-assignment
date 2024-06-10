import React, { useState } from 'react';
import './FilterDialog.css';
import CriteriaRow from './CriteriaRow';
import SelectionSection from './SelectionSection';
import handleSave from './handleSave';

const FilterDialog = ({ onClose }) => {
  const [criteria, setCriteria] = useState([{ type: 'Amount', value: '', condition: 'equals' }]);
  const [selection, setSelection] = useState('option1');
  const [filterName, setFilterName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [criteriaErrors, setCriteriaErrors] = useState([{ type: false, condition: false, value: false }]);

  const addCriteria = () => {
    setCriteria([...criteria, { type: 'Amount', value: '', condition: 'equals' }]);
    setCriteriaErrors([...criteriaErrors, { type: false, condition: false, value: false }]);
  };

  const removeCriteria = (index) => {
    if (criteria.length === 1) return;

    const newCriteria = criteria.filter((_, i) => i !== index);
    const newCriteriaErrors = criteriaErrors.filter((_, i) => i !== index);

    setCriteria(newCriteria);
    setCriteriaErrors(newCriteriaErrors);
  };

  const handleCriteriaChange = (index, key, value) => {
    const newCriteria = criteria.map((criterion, i) => 
      i === index ? { ...criterion, [key]: value } : criterion
    );
    setCriteria(newCriteria);

    const newCriteriaErrors = criteriaErrors.map((error, i) => 
      i === index ? { ...error, [key]: !value } : error
    );
    setCriteriaErrors(newCriteriaErrors);
  };

  return (
    <div className="filter-dialog">
      <div className="dialog-header">
        <h2>Create Filter</h2>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
      <div className="dialog-content">
        <input
          type="text"
          value={filterName}
          placeholder="Enter Filter Name"
          onChange={(e) => setFilterName(e.target.value)}
        />
        {nameError && <p className="error-text">Filter name cannot be empty</p>}
        
        {criteria.map((criterion, index) => (
          <CriteriaRow
            key={index}
            criterion={criterion}
            index={index}
            handleCriteriaChange={handleCriteriaChange}
            removeCriteria={removeCriteria}
            criteriaErrors={criteriaErrors[index]}
            criteriaLength={criteria.length}
          />
        ))}
        
        <button onClick={addCriteria}>+</button>
        
        <SelectionSection selection={selection} setSelection={setSelection} />
      </div>
      
      <div className="dialog-footer">
        <button onClick={() => handleSave(filterName, criteria, selection, setNameError, setCriteriaErrors, onClose)}>Save Filter</button>
      </div>
    </div>
  );
};

export default FilterDialog;