import React from "react";
import Image from "next/image";
import classes from "./SideBarLayout.module.scss";
import NavLink from "../../NavLink/NavLink";

function SideBarLayout({ children }) {
  return (
    <div className={classes.layoutContainer}>
      <div className={classes.content}>
        <nav>
          <Image src="/logo.png" alt="Marvel Logo" width={169} height={68} />
          <NavLink to="/characters">Characters</NavLink>
          <NavLink to="/comics">Comics</NavLink>
          <NavLink to="/stories">Stories</NavLink>
        </nav>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default SideBarLayout;
