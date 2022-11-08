import { IState } from "../hooks/useSRP";

export const addTodo = (state: IState): IState => {
  if (state.currentTodo === "") return state;
  if (state.todos.includes(state.currentTodo)) return state;
  if (state.todos.length >= 3) return state;

  const newState = {
    ...state,
    todos: [...state.todos, state.currentTodo],
    currentTodo: "",
  };

  return newState;
};
