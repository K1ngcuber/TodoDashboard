import * as React from "react";
import { TodoItemProps } from "./typeDefinitions";

export default function TodoItem({ todo, index, onChange, done }: TodoItemProps) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onChange(todo.timestamp);
      }}
      key={index}
      className="todo"
    >
      {done ? (
        <input className="form-check-input todo-checkbox" type="checkbox" value="" checked readOnly />
      ) : (
        <input className="form-check-input todo-checkbox" type="checkbox" value="" id={`todo_${index}`} />
      )}
      <label className={`form-check-label todo-text ${done ? "done" : ""}`} htmlFor={`todo_${index}`}>
        {todo.todo}
      </label>
    </div>
  );
}
