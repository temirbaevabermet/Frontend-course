import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const AddTask = () => {
    // Access the addTask function from TaskContext using useContext hook
  const { addTask } = useContext(TaskContext);

  // Create a local state newTask to manage the input field's value
  const [newTask, setNewTask] = useState('');

  // Function to handle adding a new task
  const handleAdd = () => {
    if (newTask.trim()) {  // Ensure the input is not empty or whitespace
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;