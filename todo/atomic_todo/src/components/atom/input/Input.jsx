import React from 'react';

const Input = ({
  inputStyle,
  tailwind,
  type,
  placeholder,
  value,
  onClick,
  onChange,
}) => {
  console.log(inputStyle);
  return (
    <input
      className={tailwind}
      style={!tailwind ? inputStyle : null}
      type={type}
      onClick={onClick}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
};

export default Input;
