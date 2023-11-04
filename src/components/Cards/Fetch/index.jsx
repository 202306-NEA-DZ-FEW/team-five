import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { useTranslation } from "next-i18next";

export default function Fetch({ locale }) {
    const { t } = useTranslation("blog", "footer", "navbar");
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
        async function fetchData() {
            let endpoint = "";

            if (locale === "ar") {
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
    }, [locale]);

    return (
        <div>
            <h1>Food and Hunger</h1>

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
            </div>
        </div>
    );
}
