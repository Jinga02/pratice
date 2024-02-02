import React, { useContext, useState } from "react";
import style from "./style/Header.module.css";
import { FiSun } from "react-icons/fi";
import { LuMoon } from "react-icons/lu";
import { TodoContext } from "../../context-api/state";

const Header = ({ header, headers, setHeader }) => {
  const handleHeaderClick = (selectedHeader) => {
    setHeader(selectedHeader);
  };

  const { darkMode, handleDarkMode } = useContext(TodoContext);

  return (
    <div className={style.HeaderWrapper}>
      <button className={style.darkModeIcon} onClick={handleDarkMode}>
        {darkMode ? <FiSun /> : <LuMoon />}
      </button>

      <ul className={style.HeaderUl}>
        {headers.map((headerItem) => (
          <li
            key={headerItem}
            onClick={() => handleHeaderClick(headerItem)}
            className={
              header === headerItem
                ? `${style.HeaderLi} ${style.selected}`
                : style.HeaderLi
            }
          >
            {headerItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
