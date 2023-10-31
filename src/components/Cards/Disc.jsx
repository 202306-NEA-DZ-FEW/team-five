import { useTranslation } from "next-i18next";
import React from "react";
import Email from "@/components/Email/Email";
import BlogCard from "@/components/BlogCard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Disc = () => {
    const { t } = useTranslation("cart", "footer", "common");

    return <div>{t("navbar.disc")}</div>;
};

export default Disc;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "cart",
                "footer",
                "common",
            ])),
        },
    };
}
