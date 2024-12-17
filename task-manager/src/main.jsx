import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TaskProvider from './context/TaskContext';
import './index.css';  // Импорт стилей

ReactDOM.render(
  <TaskProvider>
    <App />
  </TaskProvider>,
  document.getElementById('root')
);
/*import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import TaskProvider from './context/TaskContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <TaskProvider>
      <App />
    </TaskProvider>
);*/