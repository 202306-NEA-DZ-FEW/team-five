import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";
import Email from "@/components/Email/Email";
import BlogCard from "@/components/BlogCard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Disc from "@/components/Cards/Disc";

function BlogSingle({ article, articles }) {
    const { t } = useTranslation("cart", "footer", "common");
    const router = useRouter();
    const { id } = router.query;

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
                            />
                        )}
                        <h1 className='text-3xl font-semibold mb-4'>
                            {article.title}
                        </h1>
                        <p className='text-gray-500 mx-4 md:mx-20'>
                            {article.description}
                        </p>
                        <p className='mx-4 md:mx-20'>
                            {article.content} <Disc />
                        </p>

                        <h1 className='text-3xl font-semibold mb-4 mt-5'>
                            {t("read")}
                        </h1>
                        <div className='flex flex-wrap justify-center gap-4'>
                            {articles.slice(0, 4).map((member, index) => (
                                <BlogCard key={member.id} blog={member} />
                            ))}
                        </div>
                        <div className='border rounded-lg border-black pt-3 mx-4 md:mx-auto my-4 md:my-auto max-w-[1200px]'>
                            <Email />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default BlogSingle;

export async function getServerSideProps({ params, locale }) {
    try {
        let endpoint = "";

        if (locale === "ar") {
            endpoint =
                "https://gnews.io/api/v4/search?q=food&token=d9cd9b96515ab722697a60b53ba6cd37&lang=ar";
        } else {
            endpoint =
                "https://gnews.io/api/v4/search?q=food%20problems%20hunger&token=d9cd9b96515ab722697a60b53ba6cd37&lang=en";
        }

        const response = await fetch(endpoint);

        if (response.ok) {
            const data = await response.json();
            const articles = data.articles;
            const article = articles.find(
                (a) => a.title === decodeURIComponent(params.id)
            );
            return {
                props: {
                    article,
                    articles,
                    ...(await serverSideTranslations(locale, [
                        "steps",
                        "emails",
                        "button",
                        "common",
                        "footer",
                        "members",
                        "sponsor",
                        "blog",
                    ])),
                },
            };
        } else {
            console.error("Error fetching data:", response.statusText);
            return {
                props: { article: null },
            };
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: { article: null },
        };
    }
}
