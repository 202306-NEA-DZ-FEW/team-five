import { appWithTranslation } from "next-i18next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "@/styles/globals.css";

import Layout from "@/layout/Layout";
import { persistor, store } from "@/redux/store";
import Loading from "@/Utils/Loading";

import nextI18NextConfig from "../../next-i18next.config";

function MyApp({ Component, pageProps }) {
    const { t } = useTranslation("footer", "common", "cart", "blog");
    return (
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider>
    );
}

export default appWithTranslation(MyApp, nextI18NextConfig);

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "footer",
                "common",
                "cart",
                "blog",
            ])),
            // Will be passed to the page component as props
        },
    };
}
