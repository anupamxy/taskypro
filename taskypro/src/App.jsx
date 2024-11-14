import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import { getTasks, saveTasks } from './components/storage';
import { Navbar } from './components/Navbar';
function App() {
  const [tasks, setTasks] = useState(getTasks());

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const editTask = (updatedTask) => setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  const deleteTask = (taskId) => setTasks(tasks.filter((t) => t.id !== taskId));

  return (
    <div className="App">
      <Navbar/>
      <Dashboard tasks={tasks} addTask={addTask} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
