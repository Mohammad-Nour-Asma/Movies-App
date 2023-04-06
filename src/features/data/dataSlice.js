import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: true,
  faild: false,
};

export const getItems = createAsyncThunk(
  "data/getItems",
  async (args, thunkAPI) => {
    const url = `https://www.omdbapi.com/?s=${args}&apikey=${process.env.REACT_APP_MY_API_KEY}`;
    const dataFromStorage = localStorage.getItem("data");
    if (dataFromStorage) {
      const data = JSON.parse(localStorage.getItem("data"));
      return data;
    }
    const response = await fetch(url);
    let data = await response.json();

    let favorite = thunkAPI.getState().fav.favo;
    favorite = favorite.map((item) => item.imdbID);

    data = data.Search.map((item) => {
      if (favorite.indexOf(item.imdbID) > -1) {
        return { ...item, isFav: true };
      }
      return { ...item, isFav: false };
    });
    localStorage.setItem("data", JSON.stringify(data));
    return data;
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    //to put item or remove it from favorite ,depends on the old state
    makeFav: (state, { payload }) => {
      const item = state.data.find((item) => item.imdbID === payload.imdbID);
      item.isFav = !item.isFav;
      localStorage.setItem("data", JSON.stringify(state.data));
    },
  },
  extraReducers: {
    [getItems.pending]: (state) => {
      state.loading = true;
      console.log("loading");
    },
    [getItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      console.log("fullfill");
    },
    [getItems.rejected]: (state) => {
      state.isLoading = false;
      state.faild = true;
      console.log("rejected");
    },
  },
});
export default dataSlice.reducer;
export const { makeFav } = dataSlice.actions;
