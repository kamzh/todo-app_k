import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

const TaskList = ({ tasks, onToggle, onDelete, onEdit, onUpdate, editingTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} onUpdate={onUpdate} isEditing={editingTask === task.id}/>
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      created: PropTypes.instanceOf(Date).isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  editingTask: PropTypes.number,
};

export default TaskList;
