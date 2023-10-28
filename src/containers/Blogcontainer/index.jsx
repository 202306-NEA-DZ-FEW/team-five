import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";

function Blogcontainer() {
    const { t } = useTranslation("common");

    return (
        <div className='container mx-auto px-10 py-5 lg:px-32 lg:pt-24'>
            <div>
                <Link href='/Blog'>
                    <h1 className='text-3xl font-bold text-gray-700 flex items-center justify-center mb-10'>
                        {t("navbar.blog")}
                    </h1>
                </Link>
            </div>
            <div className='-m-1 flex flex-wrap md:-m-2'>
                <div className='flex w-1/2 flex-wrap'>
                    <div className='w-1/2 p-1 md:p-2'>
                        <button className='bg-green-300 text-green-600 text-xs font-bold py-1 px-1 rounded'>
                            {t("event")}
                        </button>
                    </div>

                    <div className=''>
                        <h1 className='text-xl font-bold mb-2 text-gray-700'>
                            {t("you")}
                        </h1>
                        <p className='text-gray-700 font-semibold'>
                            Lorem ipsum is simply dummy text of the printin
                            typesetting dummy text ever when an unknown printer
                            took a galley of type and scramled a type specimen
                            book.
                        </p>
                    </div>

                    <div className='w-full p-1 md:p-2 relative'>
                        <img
                            alt='blog1'
                            className='h-full w-full object-cover object-center duration-300 cursor-pointer filter grayscale hover:grayscale-0'
                            src='Blog1.png'
                        />

                        <h1 className='absolute bottom-6 left-0  text-center text-2xl text-white font-semibold px-4 mb-10'>
                            <span>
                                We Get 6500$ Donation from Multiple donors
                            </span>
                        </h1>
                        <h1 className='absolute bottom-6 left-0  text-center text-lg text-white px-4 mb-5'>
                            <span>Subtext</span>
                        </h1>
                        <Link href='/Blog'>
                            <h1 className='absolute bottom-6 left-0  text-center text-lg text-red-600 font-bold px-4'>
                                <span>{t("know")} ➔</span>
                            </h1>
                        </Link>
                    </div>
                </div>
                <div className='flex w-1/2 flex-wrap'>
                    <div className='w-1/2 p-1 md:p-1 relative'>
                        <img
                            alt='blog2'
                            className='block h-full w-full object-cover object-center duration-300 cursor-pointer filter grayscale hover:grayscale-0'
                            src='Blog2.png'
                        />

                        <h1 className='absolute bottom-6 left-0  text-center text-xl text-white font-semibold px-4 mb-10'>
                            <span>Food Insecurity Hits Hard With Veterans</span>
                        </h1>
                        <h1 className='absolute bottom-6 left-0  text-center text-lg text-white px-4 mb-5'>
                            <span>Subtext</span>
                        </h1>
                        <Link href='/Blog'>
                            <h1 className='absolute bottom-6 left-0  text-center text-lg text-red-600 font-bold px-4'>
                                <span>{t("know")} ➔</span>
                            </h1>
                        </Link>
                    </div>
                    <div className='w-1/2 p-1 md:p-1 relative'>
                        <img
                            alt='gallery'
                            className='block h-full w-full object-cover object-center duration-300 cursor-pointer filter grayscale hover:grayscale-0'
                            src='Blog4.png'
                        />

                        <h1 className='absolute bottom-6 left-0  text-center text-2xl text-white font-semibold px-4 mb-10'>
                            <span>Food waste solutions</span>
                        </h1>
                        <h1 className='absolute bottom-6 left-0  text-center text-lg text-white px-4 mb-5'>
                            <span>Subtext</span>
                        </h1>
                        <Link href='/Blog'>
                            <h1 className='absolute bottom-6 left-0  text-center text-lg text-red-600 font-bold px-4'>
                                <span>{t("know")} ➔</span>
                            </h1>
                        </Link>
                    </div>
                    <div className='w-1/2 p-1 md:p-1 relative'>
                        <img
                            alt='gallery'
                            className='block h-full w-full object-cover object-center duration-300 cursor-pointer filter grayscale hover:grayscale-0'
                            src='Blog3.png'
                        />

                        <h1 className='absolute bottom-6 left-0  text-center text-xl text-white font-semibold px-4 mb-10'>
                            <span>
                                Inside the Global Effort to Keep Perfectly Good
                                Food Out of the Dump
                            </span>
                        </h1>
                        <h1 className='absolute bottom-6 left-0  text-center text-lg text-white px-4 mb-5'>
                            <span>Subtext</span>
                        </h1>
                        <Link href='/Blog'>
                            <h1 className='absolute bottom-6 left-0  text-center text-lg text-red-600 font-bold px-4'>
                                <span>{t("know")} ➔</span>
                            </h1>
                        </Link>
                    </div>
                    <div className='w-1/2 p-1 md:p-1 relative'>
                        <img
                            alt='gallery'
                            className='block h-full w-full object-cover object-center duration-300 cursor-pointer filter grayscale hover:grayscale-0'
                            src='Blog5.png'
                        />

                        <h1 className='absolute bottom-6 left-0  text-center text-2xl text-white font-semibold px-4 mb-10'>
                            <span>
                                Rising prices, food insecurity add to ranks of
                                hungry
                            </span>
                        </h1>
                        <h1 className='absolute bottom-6 left-0  text-center text-lg text-white px-4 mb-5'>
                            <span>Subtext</span>
                        </h1>
                        <Link href='/Blog'>
                            <h1 className='absolute bottom-6 left-0  text-center text-lg text-red-600 font-bold px-4'>
                                <span>{t("know")} ➔</span>
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogcontainer;
