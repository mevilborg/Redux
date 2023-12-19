// AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';

const AddTask = () => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask({ id: Date.now(), description: newTask, isDone: false }));
      setNewTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
