import Head from "next/head";
import { useSelector } from "react-redux";
import { selectCharacters } from "../redux/slices/characters";
import { selectComics } from "../redux/slices/comics";
import { selectStories } from "../redux/slices/stories";

export default function Home() {
  const st = useSelector(selectStories);
  const co = useSelector(selectComics);
  const ch = useSelector(selectCharacters);
  console.log(st);
  console.log(co);
  console.log(ch);
  return (
    <div className="home-container">
      <div className="main-grid">
        <div className="ch">Sam</div>
        <div className="co">Sams</div>
        <div className="st">Sawm</div>
        <div className="sq">Samf</div>
      </div>
    </div>
  );
}
