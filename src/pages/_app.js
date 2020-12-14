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
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
      </Head>
      <TopBarLayout>
        <Component {...pageProps} />
      </TopBarLayout>
    </Provider>
  );
}

export default MyApp;
