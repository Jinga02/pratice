import Button from "components/atom/button/Button";
import React from "react";

const AddTodo = ({ onSubmitTodo }) => {
  return <Button label={"add"} onClick={onSubmitTodo}></Button>;
};

export default AddTodo;
