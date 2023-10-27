import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ tasksCount, onClearCompleted }) => {
  const itemsLeftText = tasksCount === 1 ? 'item left' : 'items left';

  return (
    <footer className="footer">
      <span className="todo-count">
        {tasksCount} {itemsLeftText}
      </span>
      <ul className="filters">
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  tasksCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

export default Footer;
