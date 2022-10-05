import * as React from "react";
import ReactDOM from "react-dom/client";
import TodoContainer from "./TodoContainer";

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    fetch("http://192.168.0.24:1880/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTodos(data));
  };

  const handleComplete = (timestamp: string) => {
    fetch(`http://192.168.0.24:1880/todos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ timestamp }),
    }).then(() => fetchTodos());
  };

  return <TodoContainer todos={todos} handleComplete={handleComplete} />;
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
