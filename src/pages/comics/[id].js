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

  const comic = useMarvel(`comics/${id}`);
  const characters = useMarvel(`comics/${id}/characters`);
  const stories = useMarvel(`comics/${id}/stories`);

  const comicData = comic?.data?.results[0];
  if (!comicData) {
    return null;
  }
  console.log(characters);
  return (
    <div style={{ zIndex: 999999 }}>
      <Head>
        <title>Marvel Challenge</title>
      </Head>
      <div className="detail-layout">
        <div className="detail">
          <span>{comicData.title}</span>
          <Image
            width={140}
            height={140}
            src={
              comicData.thumbnail?.path +
              "/detail." +
              comicData.thumbnail?.extension
            }
          />
          <p>{comicData.description}</p>
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
          <span>Stories</span>
          {stories.data?.results?.map((story) => (
            <div
              onClick={() => push("/stories/" + story.id)}
              style={{ cursor: "pointer" }}
            >
              {story.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComicPage;
