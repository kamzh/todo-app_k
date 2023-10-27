import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={newTask}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
