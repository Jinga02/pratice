import React from "react";
import CreateTodoForm from "../molecules/todo/CreateTodoFrom";
import TodoList from "../molecules/todo/TodoList";

const TodoContent = () => {
  return (
    <div>
      <TodoList />
      <CreateTodoForm />
    </div>
  );
};

export default TodoContent;
