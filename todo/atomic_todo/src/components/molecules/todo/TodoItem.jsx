import React from 'react';
import DeleteTodo from './DeleteTodo';
import UpdateTodo from './UpdateTodo';

const TodoItem = ({ todo }) => {
  return (
    <li className='flex justify-between p-5 text-2xl'>
      <UpdateTodo todo={todo} />
      <p className='px-6'>{todo.text}</p>
      <DeleteTodo todoId={todo.id} />
    </li>
  );
};

export default TodoItem;
