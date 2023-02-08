import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favo: [],
  total: 0,
};

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    //to update the favorite when add or remove item
    toggleToFav: (state, { payload }) => {
      if (payload.isFav === true) {
        state.total--;
        const newFav = state.favo.filter(
          (item) => item.imdbID !== payload.imdbID
        );
        state.favo = newFav;
        localStorage.setItem("fav", JSON.stringify(newFav));
      } else {
        const newFav = state.favo;
        newFav.push(payload);
        state.total++;
        state.favo = newFav;
        localStorage.setItem("fav", JSON.stringify(newFav));
      }
    },
    updateTotal: (state, { payload }) => {
      state.total = payload;
    },
  },
});

export default favSlice.reducer;
export const { toggleToFav, updateTotal } = favSlice.actions;
