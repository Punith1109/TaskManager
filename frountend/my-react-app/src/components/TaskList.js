import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <Link to="/add">Add New Task</Link>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <Link to={`/task/${task._id}`}>{task.title}</Link>
            <button onClick={() => axios.delete(`http://localhost:5000/tasks/${task._id}`).then(() => setTasks(tasks.filter(t => t._id !== task._id)))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
