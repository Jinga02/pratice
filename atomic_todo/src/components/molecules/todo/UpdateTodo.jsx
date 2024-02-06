import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../../redux/slice/TodoSlice";

const UpdateTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const onUpdateTodo = (e) => {
    const newStatus = e.target.checked ? "completed" : "active";
    dispatch(updateTodo({ todoId: todo.id, newStatus }));
  };
  return (
    <input
      type="checkbox"
      checked={todo.status === "completed"}
      onChange={onUpdateTodo}
    ></input>
  );
};

export default UpdateTodo;
