import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./slices/characters";
import comicsReducer from "./slices/comics";

import storiesReducer from "./slices/stories";

export default configureStore({
  reducer: {
    characters: charactersReducer,
    comics: comicsReducer,
    stories: storiesReducer,
  },
});
