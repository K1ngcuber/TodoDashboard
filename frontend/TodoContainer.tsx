import * as dayjs from "dayjs";
import * as React from "react";

type Todo = {
  todo: string;
  timestamp: string;
  done: boolean;
};

type TodoProps = {
  todos: Todo[];
  handleComplete: (timestamp: string) => void;
  handleUncomplete: (timestamp: string) => void;
};

export default function TodoContainer({ todos, handleComplete, handleUncomplete }: TodoProps) {
  return (
    <div className="row gx-2">
      <div className="col">
        <h1 className="glassify">Todo</h1>
        {todos.filter((x: Todo) => !x.done).length !== 0 && (
          <div className="scroll-container glassify">
            {todos
              .filter((x: Todo) => !x.done)
              .map((todo: Todo, index: any) => (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handleComplete(todo.timestamp);
                  }}
                  key={index}
                  className="todo"
                >
                  <input className="form-check-input todo-checkbox" type="checkbox" value="" id={`todo_${index}`} />
                  <label className="form-check-label todo-text" htmlFor={`todo_${index}`}>
                    {todo.todo}
                  </label>
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="col">
        <h1 className="glassify">Done</h1>
        {todos.filter((x: Todo) => x.done && dayjs(x.timestamp).add(1, "month") > dayjs()).length !== 0 && (
          <div className="scroll-container glassify">
            {todos
              .filter((x: Todo) => x.done && dayjs(x.timestamp).add(1, "month") > dayjs())
              .map((todo: Todo, index: any) => (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handleUncomplete(todo.timestamp);
                  }}
                  key={index}
                  className="todo"
                >
                  <input className="form-check-input todo-checkbox" type="checkbox" value="" checked readOnly />
                  <label className="form-check-label todo-text done" htmlFor="flexCheckDefault">
                    {todo.todo}
                  </label>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
