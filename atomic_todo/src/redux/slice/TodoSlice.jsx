import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload;
      const newTodos = state.todos.filter((todo) => todo.id !== todoId);
      state.todos = newTodos;
    },
  },
});

export const { createTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice;
