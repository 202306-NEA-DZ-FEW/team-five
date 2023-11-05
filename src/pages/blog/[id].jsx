import { useTranslation } from "next-i18next";
import React from "react";
import Article from "@/components/Cards/Article";
import { getTranslations } from "@/Utils/translation";

function BlogSingle({ translations, article, articles }) {
    const { t } = useTranslation(
        "cart",
        "footer",
        "emails",
        "navbar",
        "common"
    );

    return (
        <div className='text-center'>
            <Article article={article} articles={articles} />
        </div>
    );
}

export default BlogSingle;

export async function getStaticPaths() {
    const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
    let endpoint = `https://gnews.io/api/v4/search?q=food&token=${apiToken}&lang=en`;

    try {
        const response = await fetch(endpoint);

        if (response.ok) {
            const data = await response.json();
            const articles = data.articles;

            const paths = articles.map((article) => ({
                params: { id: encodeURIComponent(article.title) },
            }));

            return {
                paths,
                fallback: false,
            };
        } else {
            console.error("Failed to fetch data from the API.");
        }
    } catch (error) {
        console.error("An error occurred while fetching data:", error);
    }

    return {
        paths: [],
        fallback: false,
    };
}

export const getStaticProps = async ({ params, locale }) => {
    const id = params.id;
    const translations = await getTranslations(locale);

    const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
    let endpoint = "";

    if (locale === "ar") {
        endpoint = `https://gnews.io/api/v4/search?q=food&token=${apiToken}&lang=ar`;
    } else {
        endpoint = `https://gnews.io/api/v4/search?q=food%20problems%20hunger&token=${apiToken}&lang=en`;
    }

    try {
        const response = await fetch(endpoint);

        if (response.ok) {
            const data = await response.json();
            const articles = data.articles;
            const foundArticle = articles.find(
                (a) => a.title === decodeURIComponent(id)
            );

            if (foundArticle) {
                return {
                    props: {
                        translations,
                        article: foundArticle,
                        articles: articles,
                    },
                };
            } else {
                return {
                    props: {
                        translations,
                        article: null,
                        articles: articles,
                    },
                };
            }
        } else {
            console.error("Failed to fetch data from the API.");
        }
    } catch (error) {
        console.error("An error occurred while fetching data:", error);
    }

    return {
        notFound: true,
    };
};
