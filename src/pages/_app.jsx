import { appWithTranslation } from "next-i18next";
import { store, persistor } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <PersistGate loading={"loading"} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}

export default appWithTranslation(MyApp);
