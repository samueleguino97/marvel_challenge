import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { selectCharacters } from "../../redux/slices/characters";
import { selectComics } from "../../redux/slices/comics";
import { selectStories } from "../../redux/slices/stories";

import classes from "./Footer.module.scss";

function Footer() {
  const characters = useSelector(selectCharacters);
  const comics = useSelector(selectComics);
  const router = useRouter();
  return (
    <div className={classes.container}>
      <div style={{ height: 80, width: 20, backgroundColor: "red" }} />
      <Image alt="logo" src="/logo-black.png" width={280} height={70} />
      <div>
        <h3> Characters</h3>
        {characters.slice(0, 4).map((item) => (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              document.body.scrollTo({ top: 0 });
              router.push("/characters/" + item.id);
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div>
        <h3> Comics</h3>
        {comics.slice(0, 4).map((item) => (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              document.body.scrollTo({ top: 0 });
              router.push("/comics/" + item.id);
            }}
          >
            {item.title}
          </div>
        ))}
      </div>

      <div style={{ height: 80, width: 30, backgroundColor: "red" }} />
    </div>
  );
}

export default Footer;
