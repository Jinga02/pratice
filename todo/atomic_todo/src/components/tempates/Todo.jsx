import React from 'react';
import TodoHeader from '../organisms/TodoHeader';
import TodoContent from '../organisms/TodoContent';
const Todo = () => {
  return (
    <div className='bg-accent h-2/3  w-2/3 dark:bg-darkBg'>
      <TodoHeader />
      <TodoContent />
    </div>
  );
};

export default Todo;
