import * as dayjs from "dayjs";
import * as React from "react";
import ClockWidget from "./ClockWidget";
import TodoContainer from "./TodoContainer";
import "./app.css";

//dayjs locale
import "dayjs/locale/de";
dayjs.locale("de");

export default function App() {
  const ip = process.env.APP_IP;
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    //create socket
    const socket = new WebSocket(`ws://${ip}/ws`);

    //listen for messages
    socket.onmessage = () => {
      fetchTodos();
    };
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    fetch(`http://${ip}/todos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTodos(data));
  };

  const handleComplete = (timestamp: string) => {
    fetch(`http://${ip}/todos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ timestamp }),
    });
  };

  const handleUncomplete = (timestamp: string) => {
    fetch(`http://${ip}/todos/`, {
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
