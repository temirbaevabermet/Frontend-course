import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
    // Create a state variable newTask with an initial value of an empty string
  const [newTask, setNewTask] = useState('');

  // Function to handle adding a new task
  const handleAdd = () => {
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <input
        type="text"    // Specifies that this is a text input field
        value={newTask}     // Links the input field's value to the newTask state
        onChange={(e) => setNewTask(e.target.value)}    // Updates the state whenever the input value changes
        placeholder="Add a new task"   // Displays placeholder text when the input is empty
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;    // Export the component for use in other parts of the application