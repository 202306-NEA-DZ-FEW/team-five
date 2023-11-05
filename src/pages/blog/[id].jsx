import { useTranslation } from "next-i18next";
import React from "react";
import Article from "@/components/Cards/Article";
import "core-js/modules/es.array.map";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function BlogSingle({ article }) {
    const { t } = useTranslation([
        "cart",
        "footer",
        "emails",
        "navbar",
        "common",
    ]);

    return (
        <div className='text-center'>
            <Article article={article} />
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
                "blog",
            ])),
            // Will be passed to the page component as props
        },
    };
}
