// App.js
import React from 'react';
import { Provider } from 'react-redux';
import AddTask from './AddTask';
import ListTask from './ListTask';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
