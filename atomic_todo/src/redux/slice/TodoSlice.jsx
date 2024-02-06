import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  statuses: ["all", "active", "completed"],
  status: "all",
};
// initialState.status = initialState.statuses[0];

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
    updateTodo: (state, action) => {
      const { todoId, newStatus } = action.payload;
      const newTodos = state.todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, status: newStatus };
        }
        return todo;
      });
      state.todos = newTodos;
    },
    selectStatus: (state, action) => {
      const newStatus = action.payload;
      state.status = newStatus;
    },
  },
});

export const { createTodo, deleteTodo, updateTodo, selectStatus } =
  TodoSlice.actions;
export default TodoSlice;
