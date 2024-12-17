import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {   
  return (
    <ul>
      {tasks.map((task) => (   // Use the map() function to iterate over the "tasks" array
        <TaskItem key={task.id} task={task} />  // Render a TaskItem for each task, passing the task as a prop
      ))}
    </ul>
  );
};

export default TaskList;