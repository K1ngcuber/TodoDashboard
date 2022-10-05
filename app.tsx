import * as React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./TodoContainer";

function App() {
  const todos = [{ todo: "Learn React", timestamp: "2020-01-01" }];

  return (
    <div className="container">
      <TodoContainer todos={todos} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
