import { createSlice } from "@reduxjs/toolkit";

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
    },
  },
});

export const { changeTheme } = DarkModeSlice.actions;
export default DarkModeSlice;
