import SideBarLayout from "../components/layouts/SideBarLayout/SideBarLayout";
import { Provider } from "react-redux";

import "../globalStyles.scss";
import store from "../redux/store";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SideBarLayout>
        <Component {...pageProps} />
      </SideBarLayout>
    </Provider>
  );
}

export default MyApp;
