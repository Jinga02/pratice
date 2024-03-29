import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import style from "./style/DeleteTodo.module.css";
import { TodoContext } from "context-api/state";
import TodoSlice from "slice/TodoSlice";
const DeleteTodo = ({ todoId }) => {
  // context-api
  const { deleteTodo } = useContext(TodoContext);
  const handleDelete = () => {
    deleteTodo(todoId);
  };

  // redux-toolkit
  // const dispatch = useDispatch();
  // const handleDelete = () => {
  // dispatch(TodoSlice.actions.deleteTodo(todoId));
  // };
  return (
    <button onClick={handleDelete} className={style.DeleteButton}>
      <FaRegTrashAlt />
    </button>
  );
};

export default DeleteTodo;
