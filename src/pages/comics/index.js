import Image from "next/image";
import React, { useMemo, useState } from "react";
import Character from "../../components/Character/Character";
import { usePaginatedMarvel } from "../../hooks/useMarvel";
import Autocomplete from "react-autocomplete";
import { useRouter } from "next/router";

const COMIC_FORMATS = {
  COMIC: "comic",
  MAGAZINE: "magazine",
  TRADE_PAPERBACK: "trade paperback",
  HARDCOVER: "hardcover",
  DIGEST: "digest",
  GRAPHIC_NOVEL: "graphic novel",
  DIGITAL_COMIC: "digital comic",
  INFINITE_COMIC: "infinite comic",
};

const FILTERS = [
  { label: "Name", value: "NAME" },
  { label: "Comic Title", value: "COMIC" },
  { label: "Stories", value: "STORY" },
];
function Comics() {
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
  const comics = usePaginatedMarvel("comics", queryParams);
  return (
    <div>
      <div className="search-container">
        <h2>Comics</h2>
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
        {comics.data?.results
          ?.filter((character) =>
            selectedFilter === "COMIC" && searchTerm
              ? character?.comics?.items.some((comic) =>
                  comic?.name.includes(searchTerm)
                )
              : true
          )
          .map((comic) => (
            <Character
              onClick={() => router.push(`/comics/${comic.id}`)}
              character={{ ...comic, name: comic.title }}
            />
          ))}
      </div>
      <span onClick={comics.previousPage}>back</span>
      <span onClick={comics.nextPage}>next</span>
    </div>
  );
}

export default Comics;
