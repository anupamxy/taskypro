import React, { useState } from 'react';

function TaskForm({ onSubmit }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.dueDate) return;
    onSubmit({ ...task, id: Date.now() });
    setTask({ title: '', description: '', dueDate: '', priority: 'Low', completed: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={task.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={task.description} onChange={handleChange} />
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
