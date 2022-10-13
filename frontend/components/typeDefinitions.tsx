export type Todo = {
  todo: string;
  timestamp: string;
  done: boolean;
};

export type TodoContainerProps = {
  todos: Todo[];
  handleComplete: (timestamp: string) => void;
  handleUncomplete: (timestamp: string) => void;
};

export type TodoItemProps = {
  todo: Todo;
  index: number;
  onChange: (timestamp: string) => void;
  done?: boolean;
};
