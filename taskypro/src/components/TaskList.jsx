import React from 'react';

function TaskList({ tasks, editTask, deleteTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} style={{ margin: '10px 0' }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
            <button onClick={() => editTask({ ...task, completed: !task.completed })}>
              {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
