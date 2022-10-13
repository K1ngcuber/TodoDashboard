const ip = process.env.APP_IP;

export const fetchTodos = async () => {
  const response = await fetch(`http://${ip}/todos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const handleComplete = (timestamp: string) => {
  fetch(`http://${ip}/todos/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ timestamp }),
  });
};

export const handleUncomplete = (timestamp: string) => {
  fetch(`http://${ip}/todos/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ timestamp }),
  });
};
