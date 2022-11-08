import React from "react";
import { TodoItem } from "./TodoItem";

interface TodosListProps {
  todos: string[];
  handleRemoveTodo: (todo: string) => void;
}

export const TodosLits = ({ todos, handleRemoveTodo }: TodosListProps) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onClick={() => handleRemoveTodo(todo)}
        />
      ))}
    </div>
  );
};
