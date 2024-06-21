import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetail from './components/TaskDetail';
import TaskEdit from './components/TaskEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<TaskForm />} />
        <Route path="/task/:id" element={<TaskDetail />} />
        <Route path="/edit/:id" element={<TaskEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
