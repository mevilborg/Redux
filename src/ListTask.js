// ListTask.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, filterTasks } from './actions';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector((state) => {
    if (state.filter === 'all') {
      return state.tasks;
    } else if (state.filter === 'done') {
      return state.tasks.filter((task) => task.isDone);
    } else {
      return state.tasks.filter((task) => !task.isDone);
    }
  });

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(filterTasks('all'))}>All</button>
        <button onClick={() => dispatch(filterTasks('done'))}>Done</button>
        <button onClick={() => dispatch(filterTasks('notDone'))}>Not Done</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onToggle={() => dispatch(toggleTask(task.id))} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
