import React from 'react';
import Input from '../../atom/input/Input';
const InputTodo = ({ todoText, onChangeTodoText }) => {
  const tailwind = 'text-todoText flex-shrink-0 flex-grow basis-auto p-2';
  return (
    <Input
      tailwind={tailwind}
      placeholder={'오늘 할 일을 입력해주세요.'}
      onChange={onChangeTodoText}
      value={todoText}
      type={Input}
    ></Input>
  );
};

export default InputTodo;
