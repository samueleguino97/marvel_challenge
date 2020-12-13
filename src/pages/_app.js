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
      {/* <div style={{ overflow: "hidden", zIndex: 99999999 }}>
        <img
          src="/marvel_left.png"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100vh",
            width: "100%",
            zIndex: 99999999,
          }}
        />
        <img
          src="/marvel_right.png"
          style={{
            position: "absolute",
            right: 0.51499,
            bottom: 0,
            height: "100vh",
            width: "100%",
            zIndex: 99999999,
          }}
        />
      </div> */}
    </Provider>
  );
}

export default MyApp;
