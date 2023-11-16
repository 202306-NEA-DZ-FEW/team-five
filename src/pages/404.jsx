import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import FeedbackForm from "@/components/FeedbackForm";

function ErrorPage() {
    const { t } = useTranslation("error");

    return (
        <div className='flex flex-col items-center bg-white'>
            <div className='mt-20'>
                <h1 className='text-center text-xl sm:text-xl md:text-5xl font-bold text-black max-w-screen-lg m-10'>
                    404 <br />
                    <span className='text-black'>{t("error.notfound")}</span>
                </h1>
                <div className='text-center text-xl sm:text-xl md:text-3xl text-black max-w-screen-lg m-10'>
                    {t("error.oops")}
                </div>
            </div>
            <div className='mb-20'>
                <Image
                    className='mx-auto items-center m-10 sm:h-150 sm:w-150'
                    src='/notfound.png'
                    alt='not found'
                    height={600}
                    width={600}
                />
            </div>
            <div
                style={{
                    position: "fixed",
                    top: "50%",
                    right: "0",
                    transform: "translateY(-50%)",
                    zIndex: "9999",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                }}
            >
                <FeedbackForm />
            </div>
        </div>
    );
}

export default ErrorPage;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "error",
                "footer",
                "common",
                "navbar",
            ])),
        },
    };
}
