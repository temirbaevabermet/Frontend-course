import { useState } from 'react';

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task to the "tasks" state
  const addTask = (taskText) => {
    // Use the spread operator to create a new array and add a task with a unique ID and the provided text
    setTasks([...tasks, { id: Date.now(), text: taskText }]);
  };

  // Function to delete a task by its "id"
  const deleteTask = (taskId) => {
    // Filter out the task with the given ID and update the state with the remaining tasks
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return { tasks, addTask, deleteTask };
};

export default useTaskManager;