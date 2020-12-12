import { useRouter } from "next/router";
import React from "react";
import { useMarvel } from "../../hooks/useMarvel";

function StoryPage() {
  const {
    query: { id },
  } = useRouter();

  const stories = useMarvel(`stories/${id}`);
  console.log(stories);

  return <div>{stories?.data?.results[0]?.title}</div>;
}

export default StoryPage;
