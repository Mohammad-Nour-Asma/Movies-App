import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./features/favorite/FavoriteSlice";
import dataReducer from "./features/data/dataSlice";
export const store = configureStore({
  reducer: {
    fav: favoriteReducer,
    data: dataReducer,
  },
});
