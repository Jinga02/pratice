import React from "react";
import DeleteTodo from "./DeleteTodo";
import style from "./style/TodoItem.module.css";
import UpdateTodo from "./UpdateTodo";
const TodoItem = ({ todo }) => {
  return (
    <li className={style.todoItemLi}>
      <UpdateTodo todo={todo} />
      {todo.text}
      <DeleteTodo todoId={todo.id} />
    </li>
  );
};

export default TodoItem;
