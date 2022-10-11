import dayjs from "dayjs";
import * as React from "react";
import ReactDOM from "react-dom/client";
import ClockWidget from "./ClockWidget";
import TodoContainer from "./TodoContainer";

//dayjs locale
import "dayjs/locale/de";
dayjs.locale("de");

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
    socket.onmessage = () => {
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

  return (
    <React.Fragment>
      <ClockWidget />
      <TodoContainer todos={todos} handleComplete={handleComplete} handleUncomplete={handleUncomplete} />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
