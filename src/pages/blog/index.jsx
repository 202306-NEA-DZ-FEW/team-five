import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Banner from "@/components/Banner";
import Blog from "@/components/Cards/Blog";
import Stories from "@/containers/Stories";

const BlogPage = () => {
    const { t } = useTranslation("blog", "footer", "navbar", "stories");
    return (
        <div>
            <Banner
                btnText='Donate 🤍'
                imageUrl='/children.png'
                description={t("blog.give")}
                title1={t("blog.lives")}
            />

            <div>
                <p className='text-3xl font-semibold text-sky-600 ml-20 mt-5 mb-2'>
                    {t("blog.hunger")}
                </p>
                <p className='text-gray-600 ml-20 text-xl mb-2'>
                    {t("blog.needs")}
                </p>
            </div>
            <div className='mb-10'>
                <Blog />
            </div>
            <div className='bg-gray-100 '>
                <Stories />
            </div>
        </div>
    );
};

export default BlogPage;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "footer",
                "common",
                "cart",
                "blog",
                "emails",
                "navbar",
                "stories",
            ])),
            // Will be passed to the page component as props
        },
    };
}
