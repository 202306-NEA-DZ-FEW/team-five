import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { useTranslation } from "next-i18next";

export default function Blog() {
    const { t, i18n } = useTranslation("blog", "footer", "navbar");
    const [articles, setArticles] = useState([]);

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
                setArticles(data.articles);
            } else {
                console.error("Error fetching data:", response.statusText);
            }
        }

        fetchData();
    }, [i18n.language]);

    return (
        <div>
            <div>
                <div className='flex flex-wrap justify-center'>
                    {articles?.map((article, index) => (
                        <div key={index} className='mx-2'>
                            <Link
                                href={`/blog/${encodeURIComponent(
                                    article.title
                                )}`}
                            >
                                <BlogCard blog={article} />
                            </Link>
                        </div>
                    ))}
                </div>
                <div>
                    <h1 className='text-3xl font-semibold text-sky-600  mt-5 mb-2 text-center'>
                        {" "}
                        {t("blog.latest")}{" "}
                    </h1>
                </div>
                <div className='flex flex-wrap justify-center gap-4'>
                    {articles?.slice(4, 8).map((member, index) => (
                        <BlogCard key={member.id} blog={member} />
                    ))}
                </div>
            </div>
        </div>
    );
}
