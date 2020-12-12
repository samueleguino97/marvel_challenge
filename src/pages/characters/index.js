import Image from "next/image";
import React, { useMemo, useState } from "react";
import Character from "../../components/Character/Character";
import { usePaginatedMarvel } from "../../hooks/useMarvel";
import { useRouter } from "next/router";
import { FixedSizeList } from "react-window";
const FILTERS = [
  { label: "Name", value: "NAME" },
  { label: "Comic Title", value: "COMIC" },
  { label: "Stories", value: "STORY" },
];
function Characters() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(FILTERS[0].value);
  const queryParams = useMemo(
    () =>
      searchTerm && selectedFilter === "NAME"
        ? { nameStartsWith: searchTerm }
        : {},
    [searchTerm]
  );
  const characters = usePaginatedMarvel("characters", queryParams);

  const router = useRouter();

  return (
    <div>
      <h2>Characters</h2>
      {/* {FILTERS.map((filter) => (
        <div onClick={() => setSelectedFilter(filter.value)}>
          {filter.label}
        </div>
      ))} */}
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <FixedSizeList height={150} itemCount={20} itemSize={35} width={300}>
        {({ index, style }) => (
          <div style={style} key={characters.data?.results[index]?.id}>
            {characters.data?.results[index]?.name}
          </div>
        )}
      </FixedSizeList> */}
      <div className="characters-list">
        {characters.data?.results
          ?.filter((character) =>
            selectedFilter === "COMIC" && searchTerm
              ? character?.comics?.items.some((comic) =>
                  comic?.name.includes(searchTerm)
                )
              : true
          )
          .map((character) => (
            <Character
              onClick={() => router.push(`/characters/${character.id}`)}
              character={character}
            />
          ))}
      </div>
      <span onClick={characters.previousPage}>back</span>
      <span onClick={characters.nextPage}>next</span>
    </div>
  );
}

export default Characters;
