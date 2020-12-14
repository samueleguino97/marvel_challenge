import { useRouter } from "next/router";
import React from "react";
import { useMarvel } from "../../hooks/useMarvel";
import Head from "next/head";
import Image from "next/image";

function ComicPage() {
  const {
    query: { id },
    push,
  } = useRouter();

  const story = useMarvel(`stories/${id}`);
  const characters = useMarvel(`stories/${id}/characters`);
  const comics = useMarvel(`stories/${id}/comics`);

  const storyData = story?.data?.results[0];
  if (!storyData) {
    return null;
  }
  return (
    <div style={{ zIndex: 999999 }}>
      <Head>
        <title>Marvel Challenge</title>
      </Head>
      <div className="detail-layout">
        <div className="detail">
          <span>{storyData.title}</span>

          <p>{storyData.description}</p>
        </div>
        <div className="comics">
          <span>Characters</span>
          {characters.data?.results?.map((character) => (
            <div
              onClick={() => push("/characters/" + character.id)}
              style={{ cursor: "pointer" }}
            >
              {character.name}
            </div>
          ))}
        </div>
        <div className="stories">
          <span>Comics</span>
          {comics.data?.results?.map((comic) => (
            <div
              onClick={() => push("/comics/" + comic.id)}
              style={{ cursor: "pointer" }}
            >
              {comic.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComicPage;
