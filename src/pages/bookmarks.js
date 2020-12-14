import Link from "next/link";
import React from "react";
import { getBookmarks } from "../utils/bookmarks";

function Bookmarks() {
  if (typeof window === "undefined") {
    return null;
  }
  return (
    <div>
      {Object.keys(getBookmarks()).map((key) => (
        <div>
          <Link href={getBookmarks()[key]}>
            <a>{key}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Bookmarks;
