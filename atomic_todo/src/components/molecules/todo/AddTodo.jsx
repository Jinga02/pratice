import TodoButton from "components/atom/button/TodoButton";
import React from "react";

const AddTodo = ({ onSubmitTodo }) => {
  return <TodoButton label={"add"} onClick={onSubmitTodo}></TodoButton>;
};

export default AddTodo;
