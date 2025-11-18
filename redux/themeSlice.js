import { createSlice } from "@reduxjs/toolkit";
import { applyTheme } from "../src/components/theme/theme.js";

const getStoredTheme = () => {
  try {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      const parsedTheme = JSON.parse(storedTheme);
      if (parsedTheme === 'light' || parsedTheme === 'dark') {
        return parsedTheme;
      }
    }
  } catch (error) {
    console.error("Error:", error);
  }
  return 'light';
};

const initialState = {
  mode: getStoredTheme(), 
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      applyTheme(state.mode);
      
      try {
        localStorage.setItem("theme", JSON.stringify(state.mode));
      } catch (error) {
        console.error("Error:", error);
      }
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      applyTheme(state.mode);
      
      try {
        localStorage.setItem("theme", JSON.stringify(state.mode));
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;