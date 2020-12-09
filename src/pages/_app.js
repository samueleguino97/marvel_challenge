import SideBarLayout from "../components/layouts/SideBarLayout/SideBarLayout";
import MarvelAPI from "../marvel/api";
import "../globalStyles.scss";
const marvelApi = new MarvelAPI({ apiKey: "d631088db6aaacf347fc384327f95ad7" });
function MyApp({ Component, pageProps }) {
  return (
    <SideBarLayout>
      <Component {...pageProps} />
    </SideBarLayout>
  );
}

export default MyApp;
