import * as React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./TodoContainer";

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:1880/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return <TodoContainer todos={todos} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
