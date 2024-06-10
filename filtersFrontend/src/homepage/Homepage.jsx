import React, { useState, useEffect } from 'react';
import FilterDialog from '../filterDialog/FilterDialog';
import fetchFilters from './fetchFilters.jsx';
import FiltersTable from './FiltersTable.jsx';
import './Homepage.css';
import './ToggleSwitch.css';

const ModalDialog = ({ onClose }) => (
  <div className="overlay">
      <FilterDialog onClose={onClose} />
  </div>
);

const NonModalDialog = ({ onClose }) => (
  <div className="non-modal">
    <FilterDialog onClose={onClose} />
  </div>
);

const Homepage = () => {
  const [filters, setFilters] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isModalMode, setIsModalMode] = useState(true);

  useEffect(() => {
    const loadFilters = async () => {
      const data = await fetchFilters();
      setFilters(data);
    };
    loadFilters();
  }, []);

  const handleAddFilter = () => setIsDialogOpen(true);

  const handleDialogClose = async () => {
    setIsDialogOpen(false);
    const data = await fetchFilters();
    setFilters(data);
  };

  const toggleModalMode = () => setIsModalMode(!isModalMode);

  return (
    <div className="homepage">
      <h1>Filter Management</h1>
      
      <div className="button-and-toggle">
        <button onClick={handleAddFilter}>Add Filter</button>
        <label className="toggle-switch">
          <input 
            type="checkbox" 
            checked={isModalMode}
            onChange={toggleModalMode}
          />
          <span className="slider"></span>
        </label>
      </div>
      
      {isDialogOpen && (
        isModalMode ? 
          <ModalDialog onClose={handleDialogClose} /> : 
          <NonModalDialog onClose={handleDialogClose} />
      )}
      
      <FiltersTable filters={filters} />
    </div>
  );
};

export default Homepage;