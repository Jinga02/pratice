import React from "react";

const Input = ({ placeholder, value, onClick, onChange }) => {
  return (
    <input
      onClick={onClick}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
};

export default Input;
