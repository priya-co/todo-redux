import React from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

function App() {
  return (
    <div className="App">
      ToDo List
      <TodoInput />
      <TodoList/>
    </div>
  );
}

export default App;
