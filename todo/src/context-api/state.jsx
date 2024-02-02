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
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    updeteDarkMode(darkMode);
    console.log(darkMode);
  };

  useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);

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

function updeteDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

export { TodoContext, TodoProvider };
