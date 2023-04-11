import React from "react";
import { IUseCustomHookReturn } from "../hooks";

export const CustomHookTemplate = (props: IUseCustomHookReturn) => {
  return (
    <div>
      <input
        value={props.handleGetCurrentTodo()}
        onChange={(e) => props.handleCurrentTodo(e.target.value)}
      />
      <button onClick={props.handleAddTodo}>Add</button>
      <ul>
        {props.handleGetTodos().map((todo, index) => (
          <li key={index}>
            <p>{todo}</p>
            <button onClick={() => props.handleUpdateTodo(todo)}>
              Mark As Complete
            </button>
            <button onClick={() => props.handleDeleteTodo(todo)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
