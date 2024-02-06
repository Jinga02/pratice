import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../molecules/todo/TodoItem";

const TodoContent = () => {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoContent;
