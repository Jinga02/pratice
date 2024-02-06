import React from "react";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";

const TodoItem = ({ todo }) => {
  return (
    <li>
      <UpdateTodo todo={todo} />
      {todo.text}
      <DeleteTodo todoId={todo.id} />
    </li>
  );
};

export default TodoItem;
