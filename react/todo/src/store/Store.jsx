import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../slice/TodoSlice";

const Store = configureStore({
  reducer: {
    todo: TodoSlice.reducer,
  },
});

export default Store;
