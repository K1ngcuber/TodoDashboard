import * as dayjs from "dayjs";
import * as React from "react";
import ClockWidget from "./components/ClockWidget";
import TodoContainer from "./components/TodoContainer";
import "./app.css";

//dayjs locale
import "dayjs/locale/de";
import { fetchTodos, handleComplete, handleUncomplete } from "./components/TodoService";
dayjs.locale("de");

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const ip = process.env.APP_IP;

  React.useEffect(() => {
    //create socket
    const socket = new WebSocket(`ws://${ip}/ws`);

    //listen for messages
    socket.onmessage = async () => {
      setTodos(await fetchTodos());
    };

    fetchTodos().then((data) => setTodos(data));
  }, []);

  return (
    <React.Fragment>
      <ClockWidget />
      <TodoContainer todos={todos} handleComplete={handleComplete} handleUncomplete={handleUncomplete} />
    </React.Fragment>
  );
}
