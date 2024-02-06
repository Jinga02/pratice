import React from "react";

const TodoButton = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default TodoButton;
