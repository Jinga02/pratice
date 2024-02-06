import Input from "components/atom/input/Input";
import React from "react";

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
