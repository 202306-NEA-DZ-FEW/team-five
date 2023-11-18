import AOS from "aos";
import { useTranslation } from "next-i18next";
import React, { useEffect } from "react";
import { BsBalloonHeart } from "react-icons/bs";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { RiUserHeartLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";

import "aos/dist/aos.css";

import ImpactCard from "./ImpactCard";

const CouponsBanner = () => {
    const { t } = useTranslation("couponsPage");
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
        });
    }, []);
    return (
        <section className='flex flex-col xl:flex-row items-center w-full'>
            <div className='flex  bg-cover w-full xl:w-1/2 -mt-20 '>
                <img src='don2.svg' />
            </div>
            <div className='flex-1 px-4 lg:px-10 lg:mb-0 py-16'>
                <div className='w-full'>
                    <h1
                        className='lg:text-7xl md:text-5xl text-4xl font-bold text-[#1A8FE3]'
                        data-aos='fade-left'
                    >
                        {t("banner.title")}{" "}
                        <span className='underline'>
                            {t("banner.titleStyled")}{" "}
                        </span>
                    </h1>
                    <p
                        className='mt-6 mb-12 text-gray-600 font-semibold'
                        data-aos='fade-left'
                    >
                        {t("banner.description")}
                    </p>
                </div>
                <div
                    className='mt-10 grid grid-cols-2 gap-10'
                    data-aos='fade-left'
                >
                    <ImpactCard
                        title={t("banner.title1")}
                        icon={<BsBalloonHeart />}
                        description={t("banner.description1")}
                        data-aos='fade-left'
                    />
                    <ImpactCard
                        title={t("banner.title2")}
                        icon={<SlLocationPin />}
                        description={t("banner.description2")}
                        data-aos='fade-left'
                    />
                    <ImpactCard
                        title={t("banner.title3")}
                        icon={<LiaHandHoldingHeartSolid />}
                        description={t("banner.description3")}
                        data-aos='fade-left'
                    />
                    <ImpactCard
                        title={t("banner.title4")}
                        icon={<RiUserHeartLine />}
                        description={t("banner.description4")}
                        data-aos='fade-left'
                    />
                </div>
            </div>
        </section>
    );
};

export default CouponsBanner;
