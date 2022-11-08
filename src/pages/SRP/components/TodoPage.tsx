import React from "react";
import { IState } from "../hooks/useSRP";
import { TodoForm } from "./TodoForm";
import { TodosLits } from "./TodosLits";

interface TodoPageProps {
  state: IState;
  handleChangeCurrentTodo: (value: string) => void;
  handleAddTodo: () => void;
  handleRemoveTodo: (todo: string) => void;
}

export const TodoPage = ({
  state,
  handleChangeCurrentTodo,
  handleAddTodo,
  handleRemoveTodo,
}: TodoPageProps) => {
  return (
    <div>
      <TodoForm
        input={
          <input
            value={state.currentTodo}
            onChange={(e) => handleChangeCurrentTodo(e.target.value)}
            placeholder="New To Do"
          />
        }
        action={<button onClick={handleAddTodo}>Add Todo</button>}
      />
      <TodosLits todos={state.todos} handleRemoveTodo={handleRemoveTodo} />
    </div>
  );
};
