import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { selectCharacters } from "../../redux/slices/characters";

import classes from "./Footer.module.scss";

function Footer() {
  const characters = useSelector(selectCharacters);
  return (
    <div className={classes.container}>
      <div style={{ height: 80, width: 20, backgroundColor: "red" }} />
      <Image src="/logo-black.png" width={280} height={70} />
      <div>
        Characters
        {characters.slice(0, 4).map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
      <div>
        Comics
        {characters.slice(0, 4).map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
      <div>
        Stories
        {characters.slice(0, 4).map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
      <div style={{ height: 80, width: 30, backgroundColor: "red" }} />
    </div>
  );
}

export default Footer;
