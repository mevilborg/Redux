// actions.js
export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const toggleTask = (taskId) => ({
    type: 'TOGGLE_TASK',
    payload: taskId,
  });
  
  export const filterTasks = (filterType) => ({
    type: 'FILTER_TASKS',
    payload: filterType,
  });
  
  export const editTask = (taskId, updatedDescription) => ({
    type: 'EDIT_TASK',
    payload: { taskId, updatedDescription },
  });
  