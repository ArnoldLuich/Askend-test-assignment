import React from "react";
import './FiltersTable.css';

const FiltersTable = ({ filters }) => (
    <div className="filters-table">
      <h2>Saved Filters</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Criteria</th>
            <th>Selection</th>
          </tr>
        </thead>
        <tbody>
          {filters.map(filter => (
            <tr key={filter.id}>
              <td>{filter.id}</td>
              <td>{filter.name}</td>
              <td>
                {filter.criteria.map((c, idx) => (
                  <div key={idx}>
                    <span>{c.type} {c.condition} {c.value}</span>
                  </div>
                ))}
              </td>
              <td>{filter.selection}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  export default FiltersTable;