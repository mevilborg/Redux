// reducers.js
const initialState = {
    tasks: [],
    filter: 'all', // 'all', 'done', 'notDone'
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, isDone: !task.isDone }
              : task
          ),
        };
      case 'FILTER_TASKS':
        return {
          ...state,
          filter: action.payload,
        };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.taskId
              ? { ...task, description: action.payload.updatedDescription }
              : task
          ),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  