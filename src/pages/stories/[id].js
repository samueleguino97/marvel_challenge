import { useRouter } from "next/router";
import React from "react";
import { useMarvel } from "../../hooks/useMarvel";
import Head from "next/head";

function StoryPage() {
  const {
    query: { id },
  } = useRouter();

  const stories = useMarvel(`stories/${id}`);

  return (
    <div>
      {" "}
      <Head>
        <title>Marvel Challenge</title>
      </Head>
      {stories?.data?.results[0]?.title}
    </div>
  );
}

export default StoryPage;
