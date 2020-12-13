import SideBarLayout from "../components/layouts/SideBarLayout/SideBarLayout";
import { Provider } from "react-redux";

import store from "../redux/store";
import TopBarLayout from "../components/layouts/TopBarLayout/TopBarLayout";

import "../globalStyles.scss";
import "../styles/pages/home.scss";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <TopBarLayout>
        <Component {...pageProps} />
      </TopBarLayout>
    </Provider>
  );
}

export default MyApp;
