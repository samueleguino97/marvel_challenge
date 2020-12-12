import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./slices/characters";

export default configureStore({
  reducer: {
    characters: charactersReducer,
  },
});
