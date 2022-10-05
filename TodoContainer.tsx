import React from "react";

export default function TodoContainer({ todos }) {
  return (
    <div className="todo-container">
      <div className="col">
        <h1>Todo List</h1>
      </div>
      <div className="col">
        <h1>Done</h1>
      </div>
    </div>
  );
}
