import { createSlice } from "@reduxjs/toolkit";

// 초기 테마 설정
let initialTheme;
if (
  !localStorage.getItem("theme") ||
  localStorage.getItem("theme") === "light"
) {
  initialTheme = "light";
} else {
  initialTheme = "dark";
}
localStorage.setItem("theme", initialTheme);

// 다크모드 적용
if (initialTheme === "dark") {
  document.documentElement.classList.add("dark");
}

const initialState = {
  theme: initialTheme,
};

const DarkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      const newTheme = action.payload;
      localStorage.setItem("theme", newTheme);
      state.theme = newTheme;
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

export const { changeTheme } = DarkModeSlice.actions;
export default DarkModeSlice;
