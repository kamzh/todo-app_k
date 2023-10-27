import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

const Task = ({ task, onToggle, onDelete, onEdit, onUpdate, isEditing }) => {
  const { description, created, completed } = task;
  const [newDescription, setNewDescription] = useState(description);

  const handleToggle = () => {
    onToggle(task);
  };

  const handleDelete = () => {
    onDelete(task);
  };

  const handleEdit = () => {
    onEdit(task);
  };

  const handleUpdate = () => {
    onUpdate(id, newDescription);
  };

  const timeAgo = formatDistanceToNow(new Date(created));

  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={handleToggle} />
        {isEditing ? (
          <input
            className="edit"
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            onBlur={handleUpdate}
            autoFocus
          />
        ) : (
          <label>
            <span className="description">{description}</span>
            <span className="created">created {timeAgo} ago</span>
          </label>
        )}
        <button className="icon icon-edit" onClick={handleEdit}></button>
        <button className="icon icon-destroy" onClick={handleDelete}></button>
      </div>
    </li>
  );
};


Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    created: PropTypes.instanceOf(Date).isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
};

export default Task;