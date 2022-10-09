import * as React from "react";
import ReactDOM from "react-dom/client";
import TodoContainer from "./TodoContainer";

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    //create socket
    const socket = new WebSocket("ws://192.168.0.24:1880/ws");

    //open socket
    socket.onopen = () => {
      console.log("Connected to server");
    };

    //listen for messages
    socket.onmessage = (event) => {
      fetchTodos();
    };
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
    });
  };

  const handleUncomplete = (timestamp: string) => {
    fetch(`http://192.168.0.24:1880/todos/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ timestamp }),
    });
  };

  return <TodoContainer todos={todos} handleComplete={handleComplete} handleUncomplete={handleUncomplete} />;
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
