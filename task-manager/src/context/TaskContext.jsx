import React, { createContext } from 'react';
import useTaskManager from '../hooks/useTaskManager';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    // Call the useTaskManager hook to manage tasks and provide methods to add and delete tasks
  const { tasks, addTask, deleteTask } = useTaskManager();

  // Provide the tasks state and methods (addTask and deleteTask) to any components wrapped by this provider
  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children} 
    </TaskContext.Provider>
  );
};

export default TaskProvider;