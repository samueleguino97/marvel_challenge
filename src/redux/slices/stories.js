import { createSlice } from "@reduxjs/toolkit";

const storiesSlice = createSlice({
  name: "stories",
  initialState: [],
  reducers: {
    setStories: (state, action) => (state = action.payload),
  },
});

export const selectStories = (state) => state.stories;

export const { setStories } = storiesSlice.actions;

export default storiesSlice.reducer;
