export function addBookmark(title, link) {
  const currentBookmarks = getBookmarks();
  localStorage.setItem(
    "bookmark",
    JSON.stringify({ ...currentBookmarks, [title]: link })
  );
}

export function getBookmarks() {
  return JSON.parse(localStorage.getItem("bookmark") || "{}");
}
