import React from "react";
import CreateTodoForm from "../components/molecules/todo/CreateTodoFrom";
import TodoContent from "../components/organisms/TodoContent";

const TodoPage = () => {
  return (
    <>
      <TodoContent />
      <CreateTodoForm />
    </>
  );
};

export default TodoPage;
