import { IMovieSearchItem } from "../types";

export const loadFavoriteMovies = () => {
  const favorites = localStorage.getItem("favoriteMovies");
  if (!favorites) {
    return [];
  }

  return JSON.parse(favorites);
};

export const persistFavoriteMovies = (movies: IMovieSearchItem[]) => {
  localStorage.setItem("favoriteMovies", JSON.stringify(movies));
};

