import React from "react";
import Input from "../../atom/input/Input";
const InputTodo = ({ todoText, onChangeTodoText }) => {
  return (
    <Input
      placeholder={"오늘 할 일을 입력해주세요."}
      onChange={onChangeTodoText}
      value={todoText}
    ></Input>
  );
};

export default InputTodo;
