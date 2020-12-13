import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: "characters",
  initialState: [],
  reducers: {
    setCharacters: (state, action) => (state = action.payload),
  },
});

export const selectCharacters = (state) => state.characters;

export const { setCharacters } = characterSlice.actions;

export default characterSlice.reducer;
