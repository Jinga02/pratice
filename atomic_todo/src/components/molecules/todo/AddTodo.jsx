import React from 'react';
import Button from '../../atom/button/Button';
import { useSelector } from 'react-redux';

const AddTodo = ({ onSubmitTodo }) => {
  let theme = useSelector((state) => state.theme.theme);

  const tailwind = 'px-7 rounded-r-md text-xl capitalize';

  return (
    <Button tailwind={tailwind} label={'add'} onClick={onSubmitTodo}></Button>
  );
};

export default AddTodo;
