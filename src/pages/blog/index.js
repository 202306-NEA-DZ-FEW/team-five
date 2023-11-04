import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";
import Banner from "@/components/Banner";
import BlogCard from "@/components/BlogCard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Blog = ({ articles }) => {
    const { t } = useTranslation("blog", "footer", "navbar");
    return (
        <div>
            <Banner
                btnText='Donate 🤍'
                imageUrl='/children.png'
                description={t("blog.give")}
                title1={t("blog.lives")}
            />

            <div>
                <p className='text-xl font-semibold text-sky-600'>
                    {t("blog.latest")}
                </p>
                <p className='text-gray-600'>{t("blog.needs")}</p>
            </div>
            <div>
                {/* <div className='flex flex-wrap justify-center'>
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
                </div> */}
            </div>
        </div>
    );
};

export async function getServerSideProps({ locale }) {
    try {
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
            return {
                props: {
                    articles,
                    ...(await serverSideTranslations(locale, [
                        "blog",
                        "footer",
                        "navbar",
                    ])),
                },
            };
        } else {
            console.error("Error fetching data:", response.statusText);
            return {
                props: {
                    articles: [],
                    ...(await serverSideTranslations(locale, [
                        "blog",
                        "footer",
                        "navbar",
                    ])),
                },
            };
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                articles: [],
                ...(await serverSideTranslations(locale, [
                    "blog",
                    "footer",
                    "navbar",
                ])),
            },
        };
    }
}

export default Blog;
