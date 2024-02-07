import React from 'react';

const Button = ({ label, onClick, Icon, tailwind }) => {
  console.log(tailwind);
  return (
    <button className={tailwind} onClick={onClick}>
      {Icon ? <Icon /> : label}
    </button>
  );
};

export default Button;
