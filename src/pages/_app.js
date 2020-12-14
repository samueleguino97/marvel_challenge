import SideBarLayout from "../components/layouts/SideBarLayout/SideBarLayout";
import { Provider } from "react-redux";

import store from "../redux/store";
import TopBarLayout from "../components/layouts/TopBarLayout/TopBarLayout";

import "../globalStyles.scss";
import "../styles/pages/home.scss";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <TopBarLayout>
        <Component {...pageProps} />
      </TopBarLayout>
    </Provider>
  );
}

export default MyApp;
