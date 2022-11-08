import { IState } from "../hooks/useSRP";

export const remoteTodo = (todo: string, state: IState) => {
  return {
    ...state,
    todos: state.todos.filter((td) => td !== todo),
  };
};
