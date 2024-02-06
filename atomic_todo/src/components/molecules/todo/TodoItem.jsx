import React from "react";
import DeleteTodo from "./DeleteTodo";

const TodoItem = ({ todo }) => {
  return (
    <li>
      {todo.text}
      <DeleteTodo todoId={todo.id} />
    </li>
  );
};

export default TodoItem;
