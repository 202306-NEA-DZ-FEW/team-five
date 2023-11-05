import { useTranslation } from "next-i18next";
import React from "react";
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

export async function getServerSideProps({ params, locale }) {
    const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

    const endpoint = `https://gnews.io/api/v4/search?q=food%20problems%20hunger&token=${apiToken}&lang=en`;

    const response = await fetch(endpoint);

    if (response.ok) {
        const data = await response.json();
        const articles = data.articles;
        const foundArticle = articles.find(
            (a) => a.title === decodeURIComponent(params.id)
        );
        return {
            props: { article: foundArticle, articles },
        };
    }

    return {
        props: {},
    };
}
