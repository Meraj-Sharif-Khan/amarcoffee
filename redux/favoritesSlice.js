import { createSlice } from '@reduxjs/toolkit';

const loadFavoritesFromStorage = () => {
  try {
    const savedFavorites = localStorage.getItem('amarcoffee_favorites');
    if (savedFavorites) {
      const parsed = JSON.parse(savedFavorites);
      return {
        favorites: parsed,
        favoritesCount: parsed.length
      };
    }
  } catch (error) {
    console.error('Error loading favorites from localStorage:', error);
  }
  return {
    favorites: [],
    favoritesCount: 0
  };
};

const saveFavoritesToStorage = (favorites) => {
  try {
    localStorage.setItem('amarcoffee_favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites to localStorage:', error);
  }
};

const initialState = loadFavoritesFromStorage();

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const item = action.payload;
      const existingItem = state.favorites.find(fav => fav.id === item.id);
      
      if (!existingItem) {
        state.favorites.push(item);
        state.favoritesCount = state.favorites.length;
        saveFavoritesToStorage(state.favorites);
      }
    },
    
    removeFromFavorites: (state, action) => {
      const itemId = action.payload;
      state.favorites = state.favorites.filter(fav => fav.id !== itemId);
      state.favoritesCount = state.favorites.length;
      saveFavoritesToStorage(state.favorites);
    },
    
    toggleFavorite: (state, action) => {
      const item = action.payload;
      const existingIndex = state.favorites.findIndex(fav => fav.id === item.id);
      
      if (existingIndex >= 0) {
        state.favorites.splice(existingIndex, 1);
      } else {
        state.favorites.push(item);
      }
      state.favoritesCount = state.favorites.length;
      saveFavoritesToStorage(state.favorites);
    },
    
    clearFavorites: (state) => {
      state.favorites = [];
      state.favoritesCount = 0;
      saveFavoritesToStorage(state.favorites);
    },
    
    isFavorite: (state, action) => {
      const itemId = action.payload;
      return state.favorites.some(fav => fav.id === itemId);
    }
  }
});

export const {
  addToFavorites,
  removeFromFavorites,
  toggleFavorite,
  clearFavorites,
  isFavorite
} = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.favorites;
export const selectFavoritesCount = (state) => state.favorites.favoritesCount;
export const selectIsFavorite = (itemId) => (state) => 
  state.favorites.favorites.some(fav => fav.id === itemId);

export default favoritesSlice.reducer;