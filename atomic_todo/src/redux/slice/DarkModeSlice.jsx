import { createSlice } from "@reduxjs/toolkit";

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
}
const initialState = {
  theme: localStorage.getItem("theme"),
};

const DarkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      const newTheme = action.payload;
      localStorage.setItem("theme", newTheme);
      state.theme = newTheme;
      console.log(newTheme);
    },
  },
});

export const { changeTheme } = DarkModeSlice.actions;
export default DarkModeSlice;
