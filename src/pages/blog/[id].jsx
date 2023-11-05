import { useTranslation } from "next-i18next";
import React from "react";
import Article from "@/components/Cards/Article";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function BlogSingle() {
    const { t } = useTranslation(
        "cart",
        "footer",
        "emails",
        "navbar",
        "common"
    );

    return (
        <div className='text-center'>
            <Article />
        </div>
    );
}

export default BlogSingle;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "cart",
                "footer",
                "emails",
                "navbar",
                "common",
            ])),
            // Will be passed to the page component as props
        },
    };
}
