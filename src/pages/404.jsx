import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

export default function NotFoundPage() {
    const { t } = useTranslation("footer", "common", "cart");
    return <div>404</div>;
}

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
