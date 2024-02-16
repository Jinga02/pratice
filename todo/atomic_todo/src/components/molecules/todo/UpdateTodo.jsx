import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../../../redux/slice/TodoSlice';
import Input from '../../atom/input/Input';

const UpdateTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const onUpdateTodo = (e) => {
    const newStatus = e.target.checked ? 'completed' : 'active';
    dispatch(updateTodo({ todoId: todo.id, newStatus }));
  };
  const theme = useSelector((state) => state.theme.theme);

  const inputStyle = {
    width: '24px',
    accentColor:
      theme === 'dark' ? 'var(--color-darkAccent)' : 'var(--color-accent)',
  };
  return (
    <Input
      inputStyle={inputStyle}
      type={'checkbox'}
      checked={todo.status === 'completed'}
      onChange={onUpdateTodo}
    ></Input>
  );
};

export default UpdateTodo;
