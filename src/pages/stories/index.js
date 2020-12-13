import Image from "next/image";
import React, { useMemo, useState } from "react";
import Character from "../../components/Character/Character";
import { usePaginatedMarvel } from "../../hooks/useMarvel";
import Autocomplete from "react-autocomplete";
import { useRouter } from "next/router";
import Head from "next/head";
const FILTERS = [
  { label: "Name", value: "NAME" },
  { label: "Comic Title", value: "COMIC" },
  { label: "Stories", value: "STORY" },
];
function Stories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(FILTERS[0].value);
  const router = useRouter();
  const queryParams = useMemo(
    () =>
      searchTerm && selectedFilter === "NAME"
        ? { nameStartsWith: searchTerm }
        : {},
    [searchTerm]
  );
  const stories = usePaginatedMarvel("stories", queryParams);
  console.log(stories);
  return (
    <div>
      <Head>
        <title>Marvel Challenge</title>
      </Head>
      <div className="search-container">
        <h2>stories</h2>
        {/* {FILTERS.map((filter) => (
        <div onClick={() => setSelectedFilter(filter.value)}>
          {filter.label}
        </div>
      ))} */}
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="characters-list">
        {stories.data?.results
          ?.filter((character) =>
            selectedFilter === "COMIC" && searchTerm
              ? character?.comics?.items.some((comic) =>
                  comic?.name.includes(searchTerm)
                )
              : true
          )
          .map((comic) => (
            <Character
              onClick={() => router.push(`/stories/${comic.id}`)}
              character={{ ...comic, name: comic.title }}
            />
          ))}
      </div>
      <span onClick={stories.previousPage}>back</span>
      <span onClick={stories.nextPage}>next</span>
    </div>
  );
}

export default Stories;
