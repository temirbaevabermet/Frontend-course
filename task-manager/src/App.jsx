import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Function to handle adding a new task
  const addTask = () => {
    // Check if the input is not empty (after trimming whitespace)
    if (newTask.trim()) {
      // Call the onAddTask function passed as a prop, passing the current task (newTask)
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      // Clear the input field by resetting the newTask state to an empty string
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"    // Specifies that this is a text input field
        value={newTask}   // Links the input field's value to the newTask state
        onChange={(e) => setNewTask(e.target.value)}   // Updates the state whenever the input value changes
        placeholder="Add a new task"  // Displays placeholder text when the input is empty
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;