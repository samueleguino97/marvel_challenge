import React from "react";
import Link from "next/link";

import classes from "./NavLink.module.scss";

function NavLink({ to = "", children }) {
  return (
    <Link href={to}>
      <a className={classes.container}>{children}</a>
    </Link>
  );
}

export default NavLink;
