import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IMovieSearchItem } from "../../types";
import {
  loadFavoriteMovies,
  persistFavoriteMovies,
} from "../../utils/localStorage";

const initialState: { favorites: IMovieSearchItem[] } = {
  favorites: loadFavoriteMovies(),
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    persistFavoriteMovie(state, action) {
      state.favorites.push(action.payload);
      persistFavoriteMovies(state.favorites);
    },
    removeFavoriteMovie(state, action) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.imdbID !== action.payload
      );
      persistFavoriteMovies(state.favorites);
    },
  },
});
export const { persistFavoriteMovie, removeFavoriteMovie } =
  favoritesSlice.actions;

export const selectFavoriteMovies = (state: RootState) => state.favorites;

export default favoritesSlice.reducer;
