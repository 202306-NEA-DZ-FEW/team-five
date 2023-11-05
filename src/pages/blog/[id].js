import { useTranslation } from "next-i18next";
import React from "react";
import Article from "@/components/Cards/Article";
import { getTranslations } from "@/Utils/translation";

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

export const getStaticProps = async ({ locale }) => {
    const translations = await getTranslations(locale);

    return {
        props: {
            ...translations,
        },
    };
};

export async function getStaticPaths() {
    const paths = [];

    return {
        paths,
        fallback: false,
    };
}
