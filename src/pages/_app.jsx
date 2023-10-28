import { appWithTranslation } from "next-i18next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "@/styles/globals.css";

import Layout from "@/layout/Layout";
import { persistor, store } from "@/redux/store";

function MyApp({ Component, pageProps }) {
    const { t } = useTranslation("footer", "common", "cart");
    return (
        <Provider store={store}>
            <PersistGate loading={"loading"} persistor={persistor}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider>
    );
}

export default appWithTranslation(MyApp);

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "footer",
                "common",
                "cart",
            ])),
            // Will be passed to the page component as props
        },
    };
}
