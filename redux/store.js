import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice.js";
import favoritesReducer from "./favoritesSlice.js";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    favorites: favoritesReducer
  },
});
