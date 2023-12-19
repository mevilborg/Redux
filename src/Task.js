// Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from './actions';

const Task = ({ task, onToggle }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const dispatch = useDispatch();

  const handleEditTask = () => {
    dispatch(editTask(task.id, updatedDescription));
    setEditMode(false);
  };

  return (
    <li>
      {editMode ? (
        <>
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button onClick={handleEditTask}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <button onClick={onToggle}>Toggle</button>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
    </li>
  );
};

export default Task;
