import AOS from "aos";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import React from "react";

import "aos/dist/aos.css";

import BlogCard from "@/components/BlogCard";

import Loading from "@/Utils/Loading";

export default function Blog() {
    const { t, i18n } = useTranslation("blog", "footer", "navbar");
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
        async function fetchData() {
            let endpoint = "";

            if (i18n.language === "ar") {
                endpoint = `https://gnews.io/api/v4/search?q=food&token=${apiToken}&lang=ar`;
            } else {
                endpoint = `https://gnews.io/api/v4/search?q=food%20problems%20hunger&token=${apiToken}&lang=en`;
            }

            try {
                await new Promise((resolve) => setTimeout(resolve, 2000));

                const response = await fetch(endpoint);

                if (response.ok) {
                    const data = await response.json();
                    setArticles(data.articles);
                } else {
                    console.error("Error fetching data:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [i18n.language]);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <div>
                        <div className='flex flex-wrap justify-center'>
                            {articles?.map((article, index) => (
                                <div key={index} className='mx-2'>
                                    <Link
                                        href={`/blog/${encodeURIComponent(
                                            article.title
                                        )}`}
                                        data-aos='fade-left'
                                        data-aos-duration='1000'
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
                        <div
                            className='flex flex-wrap justify-center gap-4'
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                        >
                            {articles?.slice(4, 7).map((member, index) => (
                                <BlogCard key={member.id} blog={member} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
