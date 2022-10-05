import React from "react";

type Todo = {
  todo: string;
  timestamp: string;
  done: boolean;
};

export default function TodoContainer({ todos, handleComplete }) {
  return (
    <div className="todo-container">
      <div className="row">
        <div className="col">
          <h1>Todo</h1>
          {todos
            .filter((x) => !x.done)
            .map((todo: Todo, index: any) => (
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
          {todos
            .filter((x) => x.done)
            .map((todo: Todo, index: any) => (
              <div key={index} className="todo">
                <input className="form-check-input todo-checkbox" type="checkbox" value="" checked readOnly />
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
