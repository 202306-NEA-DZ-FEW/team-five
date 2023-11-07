import { useTranslation } from "next-i18next";
import React from "react";
import { BsBalloonHeart } from "react-icons/bs";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { RiUserHeartLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";

import ImpactCard from "./ImpactCard";

const CouponsBanner = () => {
    const { t } = useTranslation("couponsPage");
    return (
        <section className='flex  flex-col xl:flex-row  items-center h-screen gap-10 w-full'>
            <div
                className='flex-1 bg-center bg-cover w-full h-full p-4'
                style={{
                    backgroundImage: "url(/couponsBanner.svg)",
                    backgroundSize: "100% auto",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
            <div className='flex-1 px-4 lg:px-10 mb-8 lg:mb-0'>
                <div className='w-full'>
                    <h1 className='lg:text-7xl md:text-5xl text-4xl font-bold text-[#1A8FE3]'>
                        {t("banner.title")}{" "}
                        <span className='underline'>
                            {t("banner.titleStyled")}{" "}
                        </span>
                    </h1>
                    <p className='mt-6 mb-12 text-gray-600 font-semibold '>
                        {t("banner.description")}
                    </p>
                </div>
                <div className='mt-10 grid grid-cols-2 gap-10'>
                    <ImpactCard
                        title={t("banner.title1")}
                        icon={<BsBalloonHeart />}
                        description={t("banner.description1")}
                    />
                    <ImpactCard
                        title={t("banner.title2")}
                        icon={<SlLocationPin />}
                        description={t("banner.description2")}
                    />
                    <ImpactCard
                        title={t("banner.title3")}
                        icon={<LiaHandHoldingHeartSolid />}
                        description={t("banner.description3")}
                    />
                    <ImpactCard
                        title={t("banner.title4")}
                        icon={<RiUserHeartLine />}
                        description={t("banner.description4")}
                    />
                </div>
            </div>
        </section>
    );
};

export default CouponsBanner;
