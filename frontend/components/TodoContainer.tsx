import * as dayjs from "dayjs";
import * as React from "react";
import TodoItem from "./TodoItem";
import { Todo, TodoContainerProps } from "./typeDefinitions";

export default function TodoContainer({ todos, handleComplete, handleUncomplete }: TodoContainerProps) {
  const done = todos.filter((x: Todo) => x.done && dayjs(x.timestamp).add(1, "month") > dayjs());
  const open = todos.filter((x: Todo) => !x.done);

  return (
    <div className="row gx-2">
      <div className="col">
        <h1 className="glassify">Todo</h1>
        {open.length !== 0 && (
          <div className="scroll-container glassify">
            {open.map((todo: Todo, index: number) => (
              <TodoItem todo={todo} index={index} onChange={handleComplete} />
            ))}
          </div>
        )}
      </div>
      <div className="col">
        <h1 className="glassify">Done</h1>
        {done.length !== 0 && (
          <div className="scroll-container glassify">
            {done.map((todo: Todo, index: number) => (
              <TodoItem todo={todo} index={index} done onChange={handleUncomplete} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
