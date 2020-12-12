import { useRouter } from "next/router";
import React from "react";
import { useMarvel } from "../../hooks/useMarvel";

function ComicPage() {
  const {
    query: { id },
  } = useRouter();

  const comic = useMarvel(`comics/${id}`);
  console.log(comic);

  return <div>{comic?.data?.results[0]?.title}</div>;
}

export default ComicPage;
