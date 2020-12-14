import React, { useMemo, useState } from "react";
import Character from "../../components/Character/Character";
import { usePaginatedMarvel } from "../../hooks/useMarvel";
import Head from "next/head";
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
  const [formatFilter, setFormatFilter] = useState("");
  const [issueFilter, setIssueFilter] = useState("");

  const [selectedFilter, setSelectedFilter] = useState(FILTERS[0].value);
  const router = useRouter();
  const queryParams = useMemo(
    () => ({
      titleStartsWith: searchTerm,
      format: formatFilter,
      issueNumber: +issueFilter,
    }),
    [searchTerm, formatFilter, issueFilter]
  );
  const comics = usePaginatedMarvel("comics", queryParams);
  return (
    <div>
      {" "}
      <Head>
        <title>Marvel Challenge</title>
      </Head>
      <div className="search-container">
        <h2>Comics</h2>
        <div>
          <input
            value={issueFilter}
            placeholder="Search for any comic by issue number"
            onChange={(e) => setIssueFilter(e.target.value)}
          />
          <select
            value={formatFilter}
            onChange={(e) => setFormatFilter(e.target.value)}
          >
            <option value="">Format Filter</option>
            {Object.keys(COMIC_FORMATS).map((format) => (
              <option value={COMIC_FORMATS[format]}>
                {COMIC_FORMATS[format]}
              </option>
            ))}
          </select>
        </div>
        <input
          value={searchTerm}
          placeholder="Search for any comic by their title"
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
