import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Steps from "@/components/donation/Steps";
import Email from "@/components/Email/Email";

function home() {
    return (
        <>
            <Steps />
            <Email />
        </>
    );
}

export default home;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "steps",
                "emails",
                "button",
            ])),
            // Will be passed to the page component as props
        },
    };
}
