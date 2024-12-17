import React, { useState } from 'react';
import AddTask from './assets/AddTask';
import TaskList from './assets/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to handle adding a new task
  const addTask = (taskText) => {
    // Update the "tasks" state by appending a new task object
    // Each task has a unique "id" generated with Date.now() and the provided "taskText"
    setTasks([...tasks, { id: Date.now(), text: taskText }]);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;