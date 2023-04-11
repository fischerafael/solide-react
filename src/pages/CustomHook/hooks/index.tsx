import React, { useState } from "react";

export interface IUseCustomHookReturn {
  handleGetTodos: () => string[];
  handleGetCurrentTodo: () => string;
  handleCurrentTodo: (value: string) => void;
  handleAddTodo: () => void;
  handleUpdateTodo: (todoToUpdate: string) => void;
  handleDeleteTodo: (todoToUpdate: string) => void;
}

export const useCustomHook = () => {
  const [currentTodo, setCurrentTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleCurrentTodo = (value: string) => {
    setCurrentTodo(value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, currentTodo]);
    setCurrentTodo("");
  };

  const handleDeleteTodo = (todoToDelete: string) => {
    const updatedTodos = todos.filter((todo) => todo !== todoToDelete);
    setTodos(updatedTodos);
  };

  const handleUpdateTodo = (todoToUpdate: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === todoToUpdate) {
        if (todo.includes("(Completed)")) {
          const [firstItem] = todo.split("(");
          return firstItem.trim();
        }

        return `${todo} (Completed)`;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleGetCurrentTodo = () => {
    return currentTodo;
  };

  const handleGetTodos = () => {
    const returnedTods = todos.slice(0, 2);
    return returnedTods;
  };

  return {
    handleGetTodos: handleGetTodos,
    handleGetCurrentTodo: handleGetCurrentTodo,
    handleCurrentTodo: handleCurrentTodo,
    handleAddTodo: handleAddTodo,
    handleUpdateTodo: handleUpdateTodo,
    handleDeleteTodo: handleDeleteTodo,
  };
};
