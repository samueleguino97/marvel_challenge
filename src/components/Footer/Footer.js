import React from "react";
import { useSelector } from "react-redux";
import { selectCharacters } from "../../redux/slices/characters";

import classes from "./Footer.module.scss";

function Footer() {
  const characters = useSelector(selectCharacters);
  return (
    <div className={classes.container}>
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
    </div>
  );
}

export default Footer;
