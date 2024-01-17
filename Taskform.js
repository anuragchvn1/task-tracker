// TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAdd, onUpdate, selectedTask }) => {
  const [text, setText] = useState(selectedTask ? selectedTask.text : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTask) {
      onUpdate({ ...selectedTask, text });
    } else {
      onAdd({ id: new Date().getTime(), text });
    }
    setText('');
  };

  return (
    <div>
      <h2>{selectedTask ? 'Update Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">{selectedTask ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default TaskForm;
