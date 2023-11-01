import { useTranslation } from "next-i18next";
import React from "react";
import Email from "@/components/Email/Email";
import BlogCard from "@/components/BlogCard";

const Disc = () => {
    const { t } = useTranslation("cart", "footer", "common");

    return <div>{t("navbar.disc")}</div>;
};

export default Disc;
