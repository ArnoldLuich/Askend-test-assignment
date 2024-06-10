import axios from 'axios';

const handleSave = (filterName, criteria, selection, setNameError, setCriteriaErrors, onClose) => {
  if (!filterName.trim()) {
    setNameError(true);
    return;
  }

  const newCriteriaErrors = criteria.map(criterion => ({
    type: !criterion.type,
    condition: !criterion.condition,
    value: !criterion.value,
  }));

  setCriteriaErrors(newCriteriaErrors);

  if (newCriteriaErrors.some(error => error.type || error.condition || error.value)) {
    return;
  }

  const newFilter = { name: filterName, criteria, selection };

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
