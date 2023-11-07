import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Banner from "@/components/Banner";
import Goal from "@/components/donation/Goal";
import Steps from "@/components/donation/Steps";
import Email from "@/components/Email/Email";
import MemberList from "@/components/Members/MemberList";
import Sponsor from "@/components/sponsors/sponsor";
import Blogcontainer from "@/containers/Blogcontainer";
import Newsl from "@/containers/Newsl";

function Homepage() {
    const { t } = useTranslation("common", "blog", "footer", "navbar");

    return (
        <>
            <Newsl />
            <Banner
                btnText={t("btn")}
                imageUrl='/BannerHome.svg'
                description={t("desc")}
                title={t("title")}
                title1={t("title1")}
                title2={t("title2")}
            />
            <Steps />
            <div className='mb-14 '>
                <Goal />
            </div>
            <div className='bg-[#F9FAFB]  '>
                <Blogcontainer />
                <div className='flex justify-center'>
                    <Email />
                </div>
            </div>
            <div className='flex justify-center '>
                <MemberList />
            </div>
            <div className='bg-[#F9FAFB] '>
                <Sponsor />
            </div>
        </>
    );
}

export default Homepage;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "steps",
                "emails",
                "button",
                "common",
                "footer",
                "members",
                "sponsor",
                "navbar",
            ])),
            // Will be passed to the page component as props
        },
    };
}
