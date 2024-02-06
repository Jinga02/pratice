import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const status = useSelector((state) => state.todo.status);
  const filterTodos = todos.filter((todo) => {
    if (status === "all") {
      return todo;
    } else {
      return todo.status === status;
    }
  });

  return (
    <ul>
      {filterTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
