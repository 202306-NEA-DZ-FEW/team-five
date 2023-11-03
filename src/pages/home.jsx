import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Banner from "@/components/Banner";
import Goal from "@/components/donation/Goal";
import Steps from "@/components/donation/Steps";
import Email from "@/components/Email/Email";
import MemberList from "@/components/Members/MemberList";
import Sponsor from "@/components/sponsors/sponsor";
import Blogcontainer from "@/containers/Blogcontainer";

function home() {
    return (
        <>
            <Banner
                btnText='Donate now'
                imageUrl='/BannerHome.svg'
                description="Be a part of the breakthrough and make someone's dream come true."
                title='Happiness'
                title1=' comes from'
                title2='Your action'
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

export default home;
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
