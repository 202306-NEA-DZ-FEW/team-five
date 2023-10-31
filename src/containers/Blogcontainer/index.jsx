import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";

function Blogcontainer() {
    const { t } = useTranslation("common");

    return (
        <div className='container mx-auto  px-10 py-5 lg:px-32 lg:pt-24 '>
            <div>
                <Link href='/Blog'>
                    <h1 className='text-3xl font-bold text-gray-700 flex items-center justify-center mb-20'>
                        {t("navbar.blog")}
                    </h1>
                </Link>
            </div>
            <div className='-m-1 flex flex-wrap md:-m-2 '>
                <div className='flex w-1/2 flex-wrap'>
                    <div className='w-1/2 p-1 md:p-2'>
                        <button className='bg-green-300 ml-5 text-green-600 text-xs font-bold py-1 px-1 rounded'>
                            {t("event")}
                        </button>
                    </div>

                    <div className=''>
                        <h1 className='text-xl font-bold mb-2 ml-10 text-gray-700'>
                            {t("you")}
                        </h1>
                        <p className='text-gray-700 ml-10 font-semibold'>
                            {t("donationsText")}
                        </p>
                    </div>

                    <div className='w-full p-1 md:p-2 relative'>
                        <img
                            alt='blog1'
                            className='h-full w-full object-cover object-center duration-300 cursor-pointer filter  hover:grayscale'
                            src='/Blog1.png'
                        />

                        <h1 className='absolute bottom-6 left-0  text-2xl text-white font-semibold px-4 mb-7'>
                            <span>{t("donationInfo")}</span>
                        </h1>

                        <Link href='/Blog'>
                            <h1 className='absolute bottom-6 left-0   text-lg text-green-500 font-bold px-4'>
                                <span>{t("know")} ➔</span>
                            </h1>
                        </Link>
                    </div>
                </div>
                <div className='flex w-1/2 flex-wrap'>
                    <div className='w-1/2 p-1 md:p-1 relative'>
                        <img
                            alt='blog2'
                            className='block h-full w-full object-cover object-center duration-300 cursor-pointer filter hover:grayscale'
                            src='/Blog2.png'
                        />

                        <h1 className='absolute bottom-6 left-0  text-xl text-white font-semibold px-4 mb-7'>
                            <span>{t("veteransInfo")}</span>
                        </h1>

                        <Link href='/Blog'>
                            <h1 className='absolute bottom-6 left-0  text-lg text-green-500 font-bold px-4'>
                                <span>{t("know")} ➔</span>
                            </h1>
                        </Link>
                    </div>
                    <div className='w-1/2 p-1 md:p-1 relative'>
                        <img
                            alt='gallery'
                            className='block h-full w-full object-cover object-center duration-300 cursor-pointer filter  hover:grayscale'
                            src='/Blog4.png'
                        />

                        <h1 className='absolute bottom-6 left-0  text-2xl text-white font-semibold px-4 mb-7'>
                            <span>{t("foodWasteInfo")}</span>
                        </h1>

                        <Link href='/Blog'>
                            <h1 className='absolute bottom-6 left-0  text-lg text-green-500 font-bold px-4'>
                                <span>{t("know")} ➔</span>
                            </h1>
                        </Link>
                    </div>
                    <div className='w-1/2 p-1 md:p-1 relative'>
                        <img
                            alt='gallery'
                            className='block h-full w-full object-cover object-center duration-300 cursor-pointer filter  hover:grayscale'
                            src='/Blog3.png'
                        />

                        <h1 className='absolute bottom-6 left-0  text-xl text-white font-semibold px-4 mb-7'>
                            <span>{t("globalEffortInfo")}</span>
                        </h1>

                        <Link href='/Blog'>
                            <h1 className='absolute bottom-6 left-0  text-lg text-green-500 font-bold px-4'>
                                <span>{t("know")} ➔</span>
                            </h1>
                        </Link>
                    </div>
                    <div className='w-1/2 p-1 md:p-1 relative'>
                        <img
                            alt='gallery'
                            className='block h-full w-full object-cover object-center duration-300 cursor-pointer filter  hover:grayscale'
                            src='/Blog5.png'
                        />

                        <h1 className='absolute bottom-6 left-0  text-2xl text-white font-semibold px-4 mb-7'>
                            <span>{t("foodInsecurityInfo")}</span>
                        </h1>

                        <Link href='/Blog'>
                            <h1 className='absolute bottom-6 left-0  text-lg text-green-500 font-bold px-4 '>
                                <span>{t("know")} ➔</span>
                            </h1>
                        </Link>
                    </div>
                </div>
                <div className='m-10'></div>
            </div>
        </div>
    );
}

export default Blogcontainer;
