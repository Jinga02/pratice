import React from "react";
import { useSelector } from "react-redux";
import TodoStatusItem from "./TodoStatusItem";
const TodoStatusList = () => {
  const statuses = useSelector((state) => state.todo.statuses);
  return (
    <ul>
      {statuses.map((status) => (
        <TodoStatusItem key={new Date()} status={status} />
      ))}
    </ul>
  );
};

export default TodoStatusList;
