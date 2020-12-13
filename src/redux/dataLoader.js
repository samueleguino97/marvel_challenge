import MarvelAPI from "../marvel/api";
import { setCharacters } from "./slices/characters";
import { setComics } from "./slices/comics";
import { setStories } from "./slices/stories";

const marvelApi = new MarvelAPI({ apiKey: "d631088db6aaacf347fc384327f95ad7" });
export const loadAllData = () => async (dispatch) => {
  const charactersRes = await marvelApi.get("characters");
  dispatch(setCharacters(charactersRes.data.results));
  const comicsRes = await marvelApi.get("comics");
  dispatch(setComics(comicsRes.data.results));
  const storiesRes = await marvelApi.get("stories");
  dispatch(setStories(storiesRes.data.results));
};
