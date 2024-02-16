import React from "react";
import Button from "../../atom/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { FaRegSun } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { changeTheme } from "../../../redux/slice/DarkModeSlice";

const DarkModeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const Icon = theme === "light" ? FaRegSun : FiMoon;
  const onChangeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    dispatch(changeTheme(newTheme));
  };
  return <Button Icon={Icon} onClick={onChangeTheme}></Button>;
};

export default DarkModeButton;
