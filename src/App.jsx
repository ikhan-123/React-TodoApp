import React, { useState, useRef } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  const todoVal = useRef('');

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = todoVal.current.value;
    setTodo([...todo, newTodo]);
    todoVal.current.value = "";
  };

  const deleteTodo = (index) => {
    console.log("todo Deleted", index);
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  const editTodo = (index) => {
    console.log("edited Todo", index);
    const editedVal = prompt("Edit New Task");
    const newTodo = [...todo];
    newTodo.splice(index, 1, editedVal);
    setTodo(newTodo);
  };

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Enter a Task" ref={todoVal} />
        <button type="submit">click</button>
      </form>

      <ul>
        {todo.map((item, index) => (
          <div key={index}>
            <li>{item}</li>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => editTodo(index)}>Edit</button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;