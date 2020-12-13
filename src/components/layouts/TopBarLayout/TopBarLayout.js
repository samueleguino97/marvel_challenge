import React, { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./TopBarLayout.module.scss";
import NavLink from "../../NavLink/NavLink";
import Footer from "../../Footer/Footer";

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loadAllData } from "../../../redux/dataLoader";
function TopBarLayout({ children }) {
  const [animationShouldStart, setAnimationShouldStart] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllData());
    setTimeout(() => setAnimationShouldStart(true), 400);
    setTimeout(() => setAnimationShouldStart(false), 800);
  }, []);

  return (
    <div className={classes.layoutContainer}>
      <div className={classes.content}>
        <nav>
          <Image
            src="/logo-black.png"
            alt="Marvel Logo"
            width={169}
            height={45}
            onClick={() => router.push("/")}
          />
          <div>
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/comics">Comics</NavLink>
            <NavLink to="/stories">Stories</NavLink>
          </div>
        </nav>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default TopBarLayout;
