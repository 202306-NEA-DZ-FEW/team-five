import AOS from "aos";
import { useTranslation } from "next-i18next";
import React, { useEffect } from "react";

import "aos/dist/aos.css";

import Banner from "@/components/Banner";
import Goal from "@/components/donation/Goal";
import Steps from "@/components/donation/Steps";
import Email from "@/components/Email/Email";
import MemberList from "@/components/Members/MemberList";
import Sponsor from "@/components/sponsors/sponsor";
import Blogcontainer from "@/containers/Blogcontainer";
import Newsl from "@/containers/Newsl";

function Home() {
    const { t } = useTranslation("common", "blog", "footer", "navbar");

    useEffect(() => {
        AOS.init();
    }, []);

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
                <div
                    className='  slide-in-right'
                    data-aos='slide-right'
                    data-aos-offset='200'
                ></div>

                <Goal />
            </div>

            <div className='bg-[#F9FAFB]  '>
                <Blogcontainer />
                <div className='flex justify-center'>
                    <Email />
                </div>
                <div
                    className='  slide-in-right'
                    data-aos='slide-right'
                    data-aos-offset='200'
                ></div>
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

export default Home;
