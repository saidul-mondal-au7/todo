import React, { useState, useRef, useEffect } from 'react';
import Todolist from './Todolist';
import { v4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';
function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos]);

  function toggoleTodo(id) {
    const newTodos = [ ...todos ];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
      const name = todoNameRef.current.value;
      if (name === '') return;
      setTodos(prevTodo => {
        return [ ...prevTodo, {id:v4(), name:name, complete:false }]
      })
      todoNameRef.current.value = null
  }

  function handleClearTodos() {
      const newTodos = todos.filter((todo => !todo.complete))
      setTodos(newTodos)
  }

  return (
    <React.Fragment>
       <Todolist todos={todos} toggleTodo={toggoleTodo} />
       <input ref={todoNameRef} type='text' />
       <button onClick={handleAddTodo}>Add Todo</button>
       <button onClick={handleClearTodos}>Clear Complete</button>
       <div>{todos.filter(todo => !todo.complete).length} Left to do</div>
    </React.Fragment>
  );
}
export default App; 
