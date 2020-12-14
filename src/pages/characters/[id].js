import { useRouter } from "next/router";
import React from "react";
import { useMarvel } from "../../hooks/useMarvel";
import Head from "next/head";
import Image from "next/image";

function CharacterPage() {
  const {
    query: { id },
    push,
  } = useRouter();

  const character = useMarvel(`characters/${id}`);
  const comics = useMarvel(`characters/${id}/comics`);
  const stories = useMarvel(`characters/${id}/stories`);

  const characterData = character?.data?.results[0];
  if (!characterData) {
    return null;
  }
  return (
    <div style={{ zIndex: 999999 }}>
      <Head>
        <title>Marvel Challenge</title>
      </Head>
      <div className="detail-layout">
        <div className="detail">
          <span>{characterData.name}</span>
          <Image
            width={140}
            height={140}
            src={
              characterData.thumbnail?.path +
              "/detail." +
              characterData.thumbnail?.extension
            }
          />
          <p>{characterData.description}</p>
        </div>
        <div className="comics">
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

export default CharacterPage;
