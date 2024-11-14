import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function Dashboard({ tasks, addTask, editTask, deleteTask }) {
  const today = new Date().toISOString().split('T')[0];

  const upcomingTasks = tasks.filter((task) => !task.completed && task.dueDate >= today);
  const overdueTasks = tasks.filter((task) => !task.completed && task.dueDate < today);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <TaskForm onSubmit={addTask} />
      <h2>Upcoming Tasks</h2>
      <TaskList tasks={upcomingTasks} editTask={editTask} deleteTask={deleteTask} />

      <h2>Overdue Tasks</h2>
      <TaskList tasks={overdueTasks} editTask={editTask} deleteTask={deleteTask} />

      <h2>Completed Tasks</h2>
      <TaskList tasks={completedTasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
}

export default Dashboard;
