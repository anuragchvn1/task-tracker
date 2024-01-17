// TaskList.js
import React from 'react';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button className="update-btn" onClick={() => onUpdate(task.id)}>
              Update
            </button>
            <button className="delete-btn" onClick={() => onDelete(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
