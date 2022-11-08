import React from "react";

interface TodoFormProps {
  input: React.ReactElement;
  action: React.ReactElement;
}

export const TodoForm = ({ input, action }: TodoFormProps) => {
  return (
    <div>
      {input}
      {action}
    </div>
  );
};
