import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Home from "@/containers/Home";

function Homepage() {
    const { t } = useTranslation("common", "blog", "footer", "navbar");

    return (
        <>
            <Home />
        </>
    );
}

export default Homepage;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "steps",
                "emails",
                "button",
                "common",
                "footer",
                "members",
                "sponsor",
                "navbar",
            ])),
            // Will be passed to the page component as props
        },
    };
}
