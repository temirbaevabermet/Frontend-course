import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskList = () => {
  const { tasks, deleteTask } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.text}</span>
          <button
            className="delete-button"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;