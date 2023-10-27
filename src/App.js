import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';
import TasksFilter from './components/TasksFilter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (description) => {
    const newTask = {
      id: tasks.length + 1,
      description,
      created: new Date(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskToToggle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskToToggle.id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(updatedTasks);
  };

  const clearCompleted = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };

  const editTask = (taskToEdit) => {
    setEditingTask(taskToEdit);
  };

  const updateTask = (taskId, newDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, description: newDescription } : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  const tasksToShow = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return false;
  });

  return (
    <section className="todoapp">
      <NewTaskForm onAddTask={addTask} />
      <section className="main">
        <TaskList tasks={tasksToShow} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask} onUpdate={updateTask} editingTask={editingTask}/>
        <Footer tasksCount={tasks.length} onClearCompleted={clearCompleted} />
      </section>
      <TasksFilter filter={filter} onSetFilter={setFilter} />
    </section>
  );
}

export default App;
