import { useRouter } from "next/router";
import React from "react";
import { useMarvel } from "../../hooks/useMarvel";
import Head from "next/head";

function ComicPage() {
  const {
    query: { id },
  } = useRouter();

  const comic = useMarvel(`comics/${id}`);
  console.log(comic);

  return (
    <div>
      {" "}
      <Head>
        <title>Marvel Challenge</title>
      </Head>
      {comic?.data?.results[0]?.title}
    </div>
  );
}

export default ComicPage;
