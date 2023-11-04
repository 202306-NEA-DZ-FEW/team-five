import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";
import Banner from "@/components/Banner";
import Fetch from "@/components/Cards/Fetch";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Blog = ({ locale }) => {
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
            <Fetch locale={locale} />
        </div>
    );
};

export default Blog;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "footer",
                "common",
                "cart",
                "blog",
                "emails",
            ])),
            // Will be passed to the page component as props
        },
    };
}
