import React from "react";

interface TodoItemProps {
  todo: string;
  onClick: () => void;
}

export const TodoItem = (props: TodoItemProps) => {
  return (
    <div>
      <p>{props.todo}</p>
      <button onClick={props.onClick}>Remove</button>
    </div>
  );
};
