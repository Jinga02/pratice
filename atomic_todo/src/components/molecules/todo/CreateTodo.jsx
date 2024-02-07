import React from 'react';
import InputTodo from './InputTodo';
import AddTodo from './AddTodo';
import { v4 as uuidv4 } from 'uuid';
import useInput from '../../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../../redux/slice/TodoSlice';

const CreateTodo = () => {
  const dispatch = useDispatch();

  const [todoText, onChangeTodoText, setTodoText] = useInput('');

  const onSubmitTodo = (e) => {
    e.preventDefault();
    if (todoText.trim() < 1) {
      return alert('오늘 할 일을 입력해주세요.');
    }
    dispatch(
      createTodo({
        id: uuidv4(),
        text: todoText,
        status: 'active',
      })
    );
    setTodoText('');
  };

  return (
    <div className='flex h-10 w-full items-center justify-center bg-gray-200'>
      <form onSubmit={onSubmitTodo} className='flex w-full p-4'>
        <InputTodo todoText={todoText} onChangeTodoText={onChangeTodoText} />
        <AddTodo onSubmitTodo={onSubmitTodo} />
      </form>
    </div>
  );
};

export default CreateTodo;
