import AOS from "aos";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import React from "react";

import "aos/dist/aos.css";

import BlogCard from "@/components/BlogCard";
import Email from "@/components/Email/Email";

const Article = () => {
    const { t, i18n } = useTranslation(
        "blog",
        "footer",
        "navbar",
        "common",
        "emails"
    );
    const [article, setArticle] = useState(null);
    const [articles, setArticles] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

        async function fetchData() {
            let endpoint = "";

            if (i18n.language === "ar") {
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
                setArticle(foundArticle);
                setArticles(articles);
            }
        }

        if (id) {
            fetchData();
        }
    }, [i18n.language, id]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
        });
    }, []);

    return (
        <div className='text-center'>
            <div className='p-4'>
                {article && (
                    <>
                        {article.image && (
                            <img
                                src={article.image}
                                alt={article.title}
                                className='w-full  rounded-lg mb-4'
                                data-aos='fade-up'
                            />
                        )}
                        <h1
                            className='text-3xl font-semibold mb-4'
                            data-aos='fade-up'
                        >
                            {article.title}
                        </h1>
                        <p
                            className='text-gray-500 mx-4 md:mx-20'
                            data-aos='fade-up'
                        >
                            {article.description}
                        </p>
                        <p className='mx-4 md:mx-20' data-aos='fade-up'>
                            {article.content} {t("blog.disc")}
                        </p>

                        <h1
                            className='text-3xl font-semibold mb-4 mt-5'
                            data-aos='fade-up'
                        >
                            {t("blog.read")}
                        </h1>
                        <div
                            className='flex flex-wrap justify-center gap-4'
                            data-aos='fade-up'
                        >
                            {articles?.slice(0, 3).map((member, index) => (
                                <BlogCard key={member.id} blog={member} />
                            ))}
                        </div>
                        <div
                            className='border rounded-lg border-black pt-3 mx-4 md:mx-auto my-4 md:my-auto max-w-[1200px]'
                            data-aos='fade-up'
                        >
                            <Email />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Article;
