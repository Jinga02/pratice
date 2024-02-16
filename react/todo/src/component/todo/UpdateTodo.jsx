import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import TodoSlice from "../../slice/TodoSlice";
import { TodoContext } from "../../context-api/state";
import style from "./style/UpdateTodo.module.css";
const UpdateTodo = ({ todo }) => {
  // context-api
  const { updateTodo } = useContext(TodoContext);
  const handleUpdate = (e) => {
    const newStatus = e.target.checked ? "completed" : "active";
    updateTodo(todo.id, newStatus);
  };

  // redux-toolkit
  // const dispatch = useDispatch();

  // const handleUpdate = (e) => {
  //   const newStatus = e.target.checked ? "completed" : "active";
  //   dispatch(TodoSlice.actions.updateTodo({ id: todo.id, newStatus }));
  // };

  return (
    <input
      type="checkbox"
      checked={todo.status === "completed"}
      onChange={handleUpdate}
      className={style.updateBox}
    ></input>
  );
};

export default UpdateTodo;
