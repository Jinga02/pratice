import React from 'react';
import TodoStatusList from '../molecules/header/TodoStatusList';
import DarkModeButton from '../molecules/header/DarkModeButton';

const TodoHeader = () => {
  return (
    <div className='flex h-10 w-full items-center justify-between px-6 text-2xl '>
      <DarkModeButton />
      <TodoStatusList />
    </div>
  );
};

export default TodoHeader;
