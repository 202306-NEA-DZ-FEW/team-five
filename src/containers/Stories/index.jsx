import AOS from "aos";
import { useTranslation } from "next-i18next";
import React, { useEffect } from "react";

import "aos/dist/aos.css";

function Stories() {
    const { t } = useTranslation("stories");

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='py-12 sm:py-12 max-w-screen-xl mx-auto'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mb-5'>
                    <h2 className='text-center text-3xl font-semibold tracking-tight text-sky-600 sm:text-4xl'>
                        {t("life")}
                    </h2>
                    <p className='text-center mt-4 text-lg leading-8 text-gray-600 mb-5'>
                        {t("we")}
                    </p>
                </div>
                <ul
                    role='list'
                    className='mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'
                    data-aos='fade-up'
                    data-aos-duration='1000'
                >
                    <li
                        key='name1'
                        className='group cursor-pointer transform transition-transform hover:scale-105 hover:bg-gray-200'
                    >
                        <img
                            className='aspect-[3/2] w-full object-cover'
                            src='storie01.png'
                            alt=''
                        />
                        <h3 className='mt-6 text-xs font-semibold leading-8 tracking-tight text-gray-600'>
                            {t("story")}
                        </h3>
                        <p className='text-xl leading-7 text-sky-600'>
                            {t("blog1")}
                        </p>
                    </li>
                    <li
                        key='name2'
                        className='group cursor-pointer transform transition-transform hover:scale-105 hover:bg-gray-200'
                    >
                        <img
                            className='aspect-[3/2] w-full object-cover'
                            src='storie02.png'
                            alt=''
                        />
                        <h3 className='mt-6 text-xs font-semibold leading-8 tracking-tight text-gray-600'>
                            {t("story")}
                        </h3>
                        <p className='text-xl leading-7 text-sky-600'>
                            {t("blog2")}
                        </p>
                    </li>
                    <li
                        key='name3'
                        className='group cursor-pointer transform transition-transform hover:scale-105 hover:bg-gray-200'
                    >
                        <img
                            className='aspect-[3/2] w-full object-cover'
                            src='storie03.png'
                            alt=''
                        />
                        <h3 className='mt-6 text-xs font-semibold leading-8 tracking-tight text-gray-600'>
                            {t("story")}
                        </h3>
                        <p className='text-xl leading-7 text-sky-600'>
                            {t("blog3")}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Stories;
