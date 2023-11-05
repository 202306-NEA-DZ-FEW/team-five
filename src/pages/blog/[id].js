import { useTranslation } from "next-i18next";
import React from "react";
import Article from "@/components/Cards/Article";

function BlogSingle() {
    const { t } = useTranslation(
        "cart",
        "footer",
        "emails",
        "navbar",
        "common"
    );

    return (
        <div className='text-center'>
            <Article />
        </div>
    );
}

export default BlogSingle;
