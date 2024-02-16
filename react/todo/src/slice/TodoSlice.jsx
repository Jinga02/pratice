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
      const deleteTodoId = action.payload;

      const newTodos = state.todos.filter((todo) => todo.id !== deleteTodoId);

      state.todos = newTodos;
    },

    updateTodo: (state, action) => {
      const { id, newStatus } = action.payload;

      const newTodos = state.todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, status: newStatus };
        }
        return todo;
      });

      state.todos = newTodos;
    },
  },
});

export default TodoSlice;
