import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import "core-js/modules/es.array.map";

import Article from "@/components/Cards/Article";

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
        },
    };
}
