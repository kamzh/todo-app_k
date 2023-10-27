import React from 'react';
import PropTypes from 'prop-types';

const TasksFilter = ({ filter, onSetFilter }) => {
  const handleFilterChange = (newFilter) => {
    onSetFilter(newFilter);
  };

  return (
    <div>
      <button
        className={filter === 'all' ? 'selected' : ''}
        onClick={() => handleFilterChange('all')}
      >
        All
      </button>
      <button
        className={filter === 'active' ? 'selected' : ''}
        onClick={() => handleFilterChange('active')}
      >
        Active
      </button>
      <button
        className={filter === 'completed' ? 'selected' : ''}
        onClick={() => handleFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
};

TasksFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onSetFilter: PropTypes.func.isRequired,
};

export default TasksFilter;
