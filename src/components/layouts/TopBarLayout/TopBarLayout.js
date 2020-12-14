import React, { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./TopBarLayout.module.scss";
import NavLink from "../../NavLink/NavLink";
import Footer from "../../Footer/Footer";

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loadAllData } from "../../../redux/dataLoader";
function TopBarLayout({ children }) {
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllData());
  }, []);

  return (
    <>
      <div className={classes.layoutContainer}>
        <div className={classes.content}>
          <nav>
            <Image
              src="/logo-black.png"
              alt="Marvel Logo"
              width={138}
              height={51}
              onClick={() => router.push("/")}
            />
            <div>
              <NavLink to="/characters">Characters</NavLink>
              <NavLink to="/comics">Comics</NavLink>
              <NavLink to="/stories">Stories</NavLink>
            </div>
          </nav>
          <main>
            <div className={classes.background} style={{ zIndex: -1 }}>
              <Image
                alt="background"
                layout="fill"
                objectFit="cover"
                quality={5}
                src="/images/background.png"
              />
            </div>
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default TopBarLayout;
