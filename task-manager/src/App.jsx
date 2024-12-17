import React, { useState } from 'react';
import AddTask from './assets/AddTask';
import TaskList from './assets/TaskList';

function App() {
  return (
    <div className="container">
      <h1>Task Manager📃</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}
export default App;