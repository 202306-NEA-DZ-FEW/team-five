import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import ButtonBack from "@/components/ButtonBack";
import SocialShare from "@/components/SocialShare";

function PaymentSuccess() {
    const { t } = useTranslation("success", "footer", "common");
    return (
        <div className='flex flex-col items-center'>
            <div>
                <div>
                    <Image
                        className='mx-auto items-center m-10 sm:h-150 sm:w-150'
                        src='/success.gif'
                        alt='success gif'
                        height={300}
                        width={300}
                    />
                </div>
                <div className='text-center text-xl sm:text-3xl md:text-5xl font-bold text-green-500 m-10'>
                    {t("success.payment")}
                </div>
                <div>
                    <h1 className='text-center text-xl sm:text-xl md:text-3xl font-bold text-green-500 max-w-screen-lg m-10'>
                        {t("success.thanks1")}
                        <span className='text-black'>
                            {t("success.thanks2")}
                        </span>
                    </h1>
                </div>
            </div>
            <div className='text-white bg-green-500 rounded'>
                <ButtonBack />
            </div>
            <div className='m-10'>
                <SocialShare />
            </div>
        </div>
    );
}

export default PaymentSuccess;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "success",
                "footer",
                "common",
            ])),
        },
    };
}
