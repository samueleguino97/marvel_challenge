import { createSlice } from "@reduxjs/toolkit";

const comicsSlice = createSlice({
  name: "comics",
  initialState: [],
  reducers: {
    setComics: (state, action) => (state = action.payload),
  },
});

export const selectComics = (state) => state.comics;

export const { setComics } = comicsSlice.actions;

export default comicsSlice.reducer;
