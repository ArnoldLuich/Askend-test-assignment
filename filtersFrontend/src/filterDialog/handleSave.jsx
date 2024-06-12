import axios from 'axios';

const handleSave = (filterName, criteria, selection, setNameError, setCriteriaErrors, onClose) => {
  // Check if the filter name is empty or only contains whitespace
  if (!filterName.trim()) {
    setNameError(true);
    return;
  }

  // Generate an array of errors for each criterion
  const newCriteriaErrors = criteria.map(criterion => ({
    type: !criterion.type,
    condition: !criterion.condition,
    value: !criterion.value,
  }));

  setCriteriaErrors(newCriteriaErrors);

  // Check if any errors are present in the new criteria errors array
  if (newCriteriaErrors.some(error => error.type || error.condition || error.value)) {
    return;
  }

  const newFilter = { name: filterName, criteria, selection };

   // Send a POST request to save the new filter
  axios.post('http://localhost:8080/api/filters', newFilter)
    .then(response => {
      console.log('Filter saved:', response.data);
      onClose();
    })
    .catch(error => {
      console.error('Error saving filter:', error);
    });
};

export default handleSave;
