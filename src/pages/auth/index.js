import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Signup from "@/components/Auth/Signup/index";

export default function Auth() {
    // eslint-disable-next-line unused-imports/no-unused-vars
    const { t } = useTranslation("signup");
    return (
        <div>
            <Signup />
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["signup"])),
        },
    };
}
