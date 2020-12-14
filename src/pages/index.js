import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="home-container">
      <Head>
        <title>Marvel Challenge</title>
      </Head>
      <div className="main-grid">
        <div className="ch">
          <Image src="/images/characters.png" layout="fill" />
          <div
            onClick={() => router.push("/characters")}
            className="grid-overlay"
          >
            <h2>Characters</h2>
            <p>
              Look up your favorite characters and learn more about them and
              their stories.
            </p>
            <div className="view">View More</div>
          </div>
        </div>
        <div className="co">
          <Image src="/images/comics.png" layout="fill" />{" "}
          <div onClick={() => router.push("/comics")} className="grid-overlay">
            <h2>Comics</h2>
            <p>
              Look up your favorite comics and learn more about their stories.
            </p>
            <div className="view">View More</div>
          </div>
        </div>
        <div className="st">
          <Image src="/images/stories.png" layout="fill" />{" "}
          <div onClick={() => router.push("/stories")} className="grid-overlay">
            <h2>Stories</h2>
            <p>
              Look up your favorite stories and learn more about them and their
              characters.
            </p>
            <div className="view">View More</div>
          </div>
        </div>
        <div className="sq"></div>
      </div>
    </div>
  );
}
