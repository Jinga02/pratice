import React from "react";
import Button from "../../atom/button/Button";

const AddTodo = ({ onSubmitTodo }) => {
  return <Button label={"add"} onClick={onSubmitTodo}></Button>;
};

export default AddTodo;
