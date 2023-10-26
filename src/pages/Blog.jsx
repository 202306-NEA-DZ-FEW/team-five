import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";

import BlogCard from "@/components/BlogCard";

function Blog() {
    const { t, i18n } = useTranslation("blog");
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://gnews.io/api/v4/search?q=food%20problems%20hunger&token=bf2ac5e52b565310b91b2082f2814153&lang=${i18n.language}`
                );

                if (response.ok) {
                    const data = await response.json();
                    setArticles(data.articles);
                } else {
                    console.error("Error fetching data:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [i18n.language]);
    return (
        <div>
            <div className='absolute flex items-center justify-between'>
                <img
                    className='relative top-0 right-0 bottom-0 left-0 h-full w-full overflow'
                    src='children.png'
                    alt='children image'
                />
                <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow bg-[hsla(0,0%,0%,0.75)]'>
                    <div className='flex h-full items-center justify-center'>
                        <div className='px-6 text-center text-white md:px-12'>
                            <h1 className='mt-2 mb-1 text-4xl font-semibold tracking-tight'>
                                <span>{t("blog.lives")}</span>
                            </h1>
                            <p className='text-xl mb-10'>{t("blog.give")}</p>

                            <button
                                onClick={() =>
                                    console.log("Donate button clicked")
                                }
                                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-[150px]'
                            >
                                Donate 🤍
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className='text-xl font-semibold text-sky-600'>
                            {t("blog.latest")}
                        </p>
                        <p className='text-gray-600'>{t("blog.needs")}</p>
                    </div>

                    <div>
                        <div className='flex flex-wrap justify-center'>
                            {articles.map((article) => (
                                <BlogCard key={article.id} blog={article} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
