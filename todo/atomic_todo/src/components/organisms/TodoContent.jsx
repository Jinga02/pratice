import React from 'react';
import CreateTodo from '../molecules/todo/CreateTodo';
import TodoList from '../molecules/todo/TodoList';

const TodoContent = () => {
  return (
    <div className='h-90 w-full bg-white  '>
      <TodoList />
      <CreateTodo />
    </div>
  );
};

export default TodoContent;
