import React, { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./TopBarLayout.module.scss";
import NavLink from "../../NavLink/NavLink";
import Footer from "../../Footer/Footer";

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loadAllData } from "../../../redux/dataLoader";
function TopBarLayout({ children }) {
  const [animationShouldStart, setAnimationShouldStart] = useState(true);
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllData());
    setTimeout(() => setAnimationShouldStart(true), 0);
    setTimeout(() => setAnimationShouldStart(false), 2400);
  }, []);

  return (
    <>
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

      {animationShouldStart && (
        <div
          style={{
            overflow: "hidden",
            zIndex: 99999999,
            height: "100vh",
            width: "100%",
            position: "fixed",
            left: 0,
            top: 0,
          }}
        >
          <Image
            className={classes.left}
            src="/marvel_left.png"
            style={{
              height: "100vh",
              width: "100%",
              zIndex: 99999999,
              overflow: "hidden",
            }}
            layout="fill"
          />
          <Image
            className={classes.right}
            src="/marvel_right.png"
            style={{
              height: "100vh",
              width: "100%",
              zIndex: 99999999,
              overflow: "hidden",
            }}
            layout="fill"
          />
        </div>
      )}
    </>
  );
}

export default TopBarLayout;
