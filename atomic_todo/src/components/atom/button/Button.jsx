import React from "react";

const Button = ({ label, onClick, Icon }) => {
  return <button onClick={onClick}>{Icon ? <Icon /> : label}</button>;
};

export default Button;
