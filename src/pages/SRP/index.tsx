import React from "react";
import { TodoPage } from "./components/TodoPage";
import { useSRP } from "./hooks/useSRP";

export const SRP = () => {
  const { handleAddTodo, handleRemoveTodo, handleChangeCurrentTodo, state } =
    useSRP();

  return (
    <TodoPage
      state={state}
      handleAddTodo={handleAddTodo}
      handleRemoveTodo={handleRemoveTodo}
      handleChangeCurrentTodo={handleChangeCurrentTodo}
    />
  );
};
