import React from "react";
import Button from "../../atom/button/Button";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../../redux/slice/TodoSlice";
const DeleteTodo = ({ todoId }) => {
  const dispatch = useDispatch();

  const onDeleteTodo = () => {
    dispatch(deleteTodo(todoId));
  };
  return <Button label={"X"} onClick={onDeleteTodo}></Button>;
};

export default DeleteTodo;
