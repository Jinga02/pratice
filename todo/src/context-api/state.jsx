import React, { createContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (deleteTodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== deleteTodoId);
    setTodos(newTodos);
  };

  const updateTodo = (id, newStatus) => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, status: newStatus };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, createTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
