import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "../features/favorites/favoritesSlice";

import { movieApi } from "./services/movie";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
