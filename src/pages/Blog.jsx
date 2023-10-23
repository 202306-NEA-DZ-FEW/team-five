import Image from "next/image";
import { useTranslation } from "next-i18next";
import React from "react";

import BlogCard from "@/components/BlogCard";

// PlaceHolder for Fake api

const articles = [
    {
        id: 1,
        title: "Sample Article 1",
        slug: "sample-article-1",
        image: "children.png",
        author: "Achraf",
        authorImage: "children.png",
        shortDescription: "This is the short description of the first article.",
        fullArticle: "This is the full content of the first article.",
    },
    {
        id: 2,
        title: "Sample Article 2",
        slug: "sample-article-2",
        image: "children.png",
        author: "Zino",
        authorImage: "children.png",
        shortDescription:
            "This is the short description of the second article.",
        fullArticle: "This is the full content of the second article.",
    },

    {
        id: 3,
        title: "Sample Article 3",
        slug: "sample-article-3",
        image: "children.png",
        author: "Hamide",
        authorImage: "children.png",
        shortDescription:
            "This is the short description of the second article.",
        fullArticle: "This is the full content of the second article.",
    },

    // Add more articles as needed
];

function Blog() {
    const { t } = useTranslation("blog");
    return (
        <div>
            <div className='absolute flex justify-between'>
                <Image
                    className='relative top-0 right-0 bottom-0 left-0 h-full w-full overflow'
                    src='children.png'
                    alt='cheldren image'
                />
                <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow bg-[hsla(0,0%,0%,0.75)]'>
                    <div className='flex h-full items-center justify-center'>
                        <div className='px-6 text-center text-white md:px-12'>
                            <h1 className='mt-2 mb-1 text-4xl font-semibold tracking-tight'>
                                <span>{t("blog.lives")}</span>
                            </h1>
                            <p className='text-xl mb-10'>{t("blog.give")}</p>
                            <button
                                type='button'
                                className='rounded border-2
             border-neutral-50 
             px-[46px] pt-[14px] 
             pb-[12px] text-sm font-medium 
             uppercase leading-normal
             text-neutral-50 transition 
             duration-150 ease-in-out
              hover:border-neutral-100
               hover:bg-neutral-100 hover:bg-opacity-10
                hover:text-neutral-100
                 focus:border-neutral-100
                  focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200'
                                data-te-ripple-init
                                data-te-ripple-color='light'
                            >
                                Donation
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
