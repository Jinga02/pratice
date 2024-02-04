import React, { createContext, useEffect, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const localStorageTodos = localStorage.getItem("todos");
    return localStorageTodos ? JSON.parse(localStorageTodos) : [];
  });

  const createTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
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

  // todo 영구저장
  const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // 다크모드
  const updateDarkMode = (darkMode) => {
    if (darkMode === true) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", false);
    }
  };

  const [darkMode, setDarkMode] = useState(() => {
    const localStorageTheme = localStorage.getItem("theme");
    return localStorageTheme ? JSON.parse(localStorageTheme) : false;
  });

  const handleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    updateDarkMode(newDarkMode);
  };

  useEffect(() => {
    saveTodosToLocalStorage(todos);
    updateDarkMode(darkMode);
  }, [todos, darkMode]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        createTodo,
        deleteTodo,
        updateTodo,
        darkMode,
        handleDarkMode,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
