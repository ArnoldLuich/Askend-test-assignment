import React from 'react';
import './CriteriaRow.css';

const CriteriaRow = ({ criterion, index, handleCriteriaChange, removeCriteria, criteriaErrors, criteriaLength }) => {
  const getInputType = () => {
    switch (criterion.type) {
      case 'Amount':
        return 'number';
      case 'Date':
        return 'date';
      default:
        return 'text';
    }
  };

  return (
    <div className="criteria-row">
      <select
        value={criterion.type}
        onChange={(e) => handleCriteriaChange(index, 'type', e.target.value)}
      >
        <option value="Amount">Amount</option>
        <option value="Title">Title</option>
        <option value="Date">Date</option>
      </select>
      
      <select
        value={criterion.condition}
        onChange={(e) => handleCriteriaChange(index, 'condition', e.target.value)}
      >
        {criterion.type === 'Amount' && (
          <>
            <option value="equals">Equals</option>
            <option value="greaterThan">Greater Than</option>
            <option value="lessThan">Less Than</option>
          </>
        )}
        {criterion.type === 'Title' && (
          <>
            <option value="contains">Contains</option>
            <option value="startsWith">Starts With</option>
            <option value="endsWith">Ends With</option>
          </>
        )}
        {criterion.type === 'Date' && (
          <>
            <option value="before">Before</option>
            <option value="after">After</option>
            <option value="on">On</option>
          </>
        )}
      </select>
      
      <input
        type={getInputType()}
        value={criterion.value}
        placeholder="Value"
        onChange={(e) => handleCriteriaChange(index, 'value', e.target.value)}
      />
      
      <button onClick={() => removeCriteria(index)} disabled={criteriaLength === 1}>-</button>
      
      <div>
        {criteriaErrors?.type && <p className="error-text">Type is required</p>}
        {criteriaErrors?.condition && <p className="error-text">Condition is required</p>}
        {criteriaErrors?.value && <p className="error-text">Value is required</p>}
      </div>
    </div>
  );
};

export default CriteriaRow;