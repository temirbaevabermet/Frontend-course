import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

// Define the TaskProvider component that wraps its children with the TaskContext.Provider
const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Define the addTask function to add a new task to the "tasks" state
  const addTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText }]);
  };

  // Return the TaskContext.Provider component with the "tasks" state and addTask function as its value
  // The "children" prop represents all components wrapped inside this provider
  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;