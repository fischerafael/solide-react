import React from "react";
import { addTodo } from "../useCase/addTodo";
import { remoteTodo } from "../useCase/removeTodo";

export interface IState {
  currentTodo: string;
  todos: string[];
}

export const useSRP = () => {
  const [state, setState] = React.useState<IState>({
    currentTodo: "",
    todos: [],
  });

  const handleAddTodo = () => {
    const updatedState = addTodo(state);
    setState(updatedState);
  };

  const handleRemoveTodo = (todo: string) => {
    const updatedState = remoteTodo(todo, state);
    setState(updatedState);
  };

  const handleChangeCurrentTodo = (value: string) => {
    setState((state) => ({ ...state, currentTodo: value }));
  };

  console.log(state);

  return {
    state,
    setState,
    handleAddTodo,
    handleRemoveTodo,
    handleChangeCurrentTodo,
  };
};
