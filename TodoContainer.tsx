import React from "react";

type Todo = {
  todo: string;
  timestamp: string;
};

export default function TodoContainer({ todos }) {
  const handleComplete = (timestamp: string) => {
    fetch(`http://192.168.0.24:1880/todos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ timestamp }),
    });
  };

  return (
    <div className="todo-container">
      <div className="row">
        <div className="col">
          <h1>Todo</h1>
          {todos.map((todo: Todo, index: any) => (
            <div key={index} className="todo">
              <input onClick={() => handleComplete(todo.timestamp)} className="form-check-input todo-checkbox" type="checkbox" value="" id={`todo_${index}`} />
              <label className="form-check-label todo-text" htmlFor={`todo_${index}`}>
                {todo.todo}
              </label>
            </div>
          ))}
        </div>
        <div className="col">
          <h1>Done</h1>
          {todos.map((todo: Todo, index: any) => (
            <div key={index} className="todo">
              <input className="form-check-input todo-checkbox" type="checkbox" value="" checked />
              <label className="form-check-label todo-text done" htmlFor="flexCheckDefault">
                {todo.todo}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
