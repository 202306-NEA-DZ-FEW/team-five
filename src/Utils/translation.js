import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getTranslations = async (locale) => {
    return await serverSideTranslations(locale, [
        "cart",
        "footer",
        "emails",
        "navbar",
        "common",
    ]);
};
