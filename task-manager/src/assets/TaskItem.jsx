import React from 'react';

const TaskItem = ({ task }) => {
  return <li>{task.text}</li>;  // Render a list item (<li>) that displays the "text" property of the "task" object
};

export default TaskItem;