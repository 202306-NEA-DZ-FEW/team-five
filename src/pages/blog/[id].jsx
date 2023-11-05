import { useTranslation } from "next-i18next";
import React from "react";
import Article from "@/components/Cards/Article";
import { getTranslations } from "@/Utils/translation";

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

export async function getStaticPaths({ locales }) {
    const paths = [];

    for (const locale of locales) {
        const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
        let endpoint = "";

        if (locale === "ar") {
            endpoint = `https://gnews.io/api/v4/search?q=food&token=${apiToken}&lang=ar`;
        } else {
            endpoint = `https://gnews.io/api/v4/search?q=food%20problems%20hunger&token=${apiToken}&lang=en`;
        }

        const response = await fetch(endpoint);

        if (response.ok) {
            const data = await response.json();
            const articles = data.articles;

            for (const article of articles) {
                paths.push({
                    params: { id: encodeURIComponent(article.title) },
                    locale,
                });
            }
        }
    }

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ locale, params }) {
    const id = params.id;
    const translations = await getTranslations(locale);

    const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
    let endpoint = "";

    if (locale === "ar") {
        endpoint = `https://gnews.io/api/v4/search?q=food&token=${apiToken}&lang=ar`;
    } else {
        endpoint = `https://gnews.io/api/v4/search?q=food%20problems%20hunger&token=${apiToken}&lang=en`;
    }

    const response = await fetch(endpoint);

    if (response.ok) {
        const data = await response.json();
        const articles = data.articles;
        const foundArticle = articles.find(
            (a) => a.title === decodeURIComponent(id)
        );

        return {
            props: {
                translations,
                article: foundArticle,
                articles: articles,
            },
        };
    } else {
        return {
            notFound: true,
        };
    }
}
