import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { useTranslation } from "next-i18next";
import Email from "@/components/Email/Email";
import { useRouter } from "next/router";

const Article = ({ article, articles }) => {
    const { t, i18n } = useTranslation(
        "blog",
        "footer",
        "navbar",
        "common",
        "emails"
    );

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
                            {article.content} {t("navbar.disc")}
                        </p>

                        <h1 className='text-3xl font-semibold mb-4 mt-5'>
                            {t("blog.read")}
                        </h1>
                        <div className='flex flex-wrap justify-center gap-4'>
                            {articles?.slice(0, 3).map((member, index) => (
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
};

export default Article;
