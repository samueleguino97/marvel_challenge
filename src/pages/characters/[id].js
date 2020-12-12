import { useRouter } from "next/router";
import React from "react";
import { useMarvel } from "../../hooks/useMarvel";

function CharacterPage() {
  const {
    query: { id },
  } = useRouter();

  const character = useMarvel(`characters/${id}`);
  console.log(character);

  return <div>{character?.data?.results[0]?.name}</div>;
}

export default CharacterPage;
