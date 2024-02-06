import React from "react";
import TodoStatusList from "../molecules/header/TodoStatusList";
import DarkModeButton from "../molecules/header/DarkModeButton";

const TodoHeader = () => {
  return (
    <div>
      <DarkModeButton />
      <TodoStatusList />
    </div>
  );
};

export default TodoHeader;
