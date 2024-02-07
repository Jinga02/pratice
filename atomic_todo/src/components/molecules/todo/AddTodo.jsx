import React from 'react';
import Button from '../../atom/button/Button';
import { useSelector } from 'react-redux';

const AddTodo = ({ onSubmitTodo }) => {
  let theme = useSelector((state) => state.theme.theme);
  theme = theme === 'dark' ? 'bg-darkAccent' : 'bg-accent';

  const tailwind = `px-7 rounded-r-md text-xl capitalize ${theme}`;

  return (
    <Button tailwind={tailwind} label={'add'} onClick={onSubmitTodo}></Button>
  );
};

export default AddTodo;
