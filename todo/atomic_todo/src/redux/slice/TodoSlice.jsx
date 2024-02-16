import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  statuses: ["all", "active", "completed"],
  status: "all",
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload;
      const newTodos = state.todos.filter((todo) => todo.id !== todoId);
      state.todos = newTodos;
      localStorage.setItem("todos", JSON.stringify(newTodos));
    },
    updateTodo: (state, action) => {
      const { todoId, newStatus } = action.payload;
      const newTodos = state.todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, status: newStatus };
        }
        return todo;
      });
      state.todos = newTodos;
      localStorage.setItem("todos", JSON.stringify(newTodos));
    },
    selectStatus: (state, action) => {
      const newStatus = action.payload;
      state.status = newStatus;
      localStorage.setItem("status", newStatus);
    },
  },
});

export const { createTodo, deleteTodo, updateTodo, selectStatus } =
  TodoSlice.actions;
export default TodoSlice;
