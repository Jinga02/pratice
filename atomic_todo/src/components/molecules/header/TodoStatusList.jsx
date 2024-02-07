import React from 'react';
import { useSelector } from 'react-redux';
import TodoStatusItem from './TodoStatusItem';
const TodoStatusList = () => {
  const statuses = useSelector((state) => state.todo.statuses);
  return (
    <ul className='flex w-4/6 justify-between '>
      {statuses.map((status) => (
        <TodoStatusItem status={status} />
      ))}
    </ul>
  );
};

export default TodoStatusList;
