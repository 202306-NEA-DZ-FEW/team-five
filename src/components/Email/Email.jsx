import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Email() {
    useEffect(() => {
        AOS.init();
    }, []);

    const { t } = useTranslation("emails");

    return (
        <layout>
            <div
                className='md:hidden'
                data-aos='fade-up'
                data-aos-duration='1000'
            >
                <div className='text-center'>
                    <h1 className='text-gray-500 font-bold text-lg'>
                        {t("GetupdateonBlogandEvents")}
                    </h1>
                    <h2 className='text-gray-400 font-bold text-lg'>
                        {t("Getdirectlyonyouremail")}
                    </h2>
                </div>
                <form
                    action='https://formsubmit.co/sidisaidmel@gmail.com'
                    method='POST'
                    className='flex flex-col items-center'
                >
                    <div className='mb-2 mt-2'>
                        <input
                            type='email'
                            placeholder={t("email")}
                            name='email'
                            className='border-2 border-gray-300 rounded h-11 w-full'
                        />
                    </div>

                    <input
                        type='hidden'
                        name='_subject'
                        value='New submission'
                    />

                    <button className='bg-green-500 rounded-full p-2 px-3 text-[9px] sm:text-base sm:px-6 text-center cursor-pointer font-medium hover:bg-green-700 mt-2'>
                        {t("Subscribe")}
                    </button>

                    <input
                        type='hidden'
                        name='_autoresponse'
                        value='Successfully subscribed'
                    />
                </form>
            </div>

            <div
                className='hidden md:grid grid-cols-2 mt-1'
                data-aos='fade-up'
                data-aos-duration='1000'
            >
                <div className='col-start'>
                    <h1 className='text-gray-500 font-bold text-lg'>
                        <p>{t("GetupdateonBlogandEvents")}</p>
                    </h1>
                    <h2 className='text-gray-400 font-bold text-lg'>
                        <p>{t("Getdirectlyonyouremail")}</p>
                    </h2>
                </div>
                <div className='col-end flex h-7'>
                    <form
                        action='https://formsubmit.co/sidisaidmel@gmail.com'
                        method='POST'
                    >
                        <input
                            type='email'
                            placeholder={t("email")}
                            name='email'
                            class='border-2 border-gray-300 rounded h-11'
                            style={{ width: "400px" }}
                        />

                        <input
                            type='hidden'
                            name='_subject'
                            value='New submission!'
                        />

                        <button className='bg-green-500 rounded-full p-2 px-3 text-[9px] sm:text-base sm:px-6 text-center cursor-pointer font-medium hover-bg-green-700'>
                            Subscribe
                        </button>

                        <input
                            type='hidden'
                            name='_autoresponse'
                            value='Successfully subscribed'
                        ></input>
                    </form>
                </div>
            </div>

            <div
                className='text-center mt-2 md:mt-0 mb-10'
                data-aos='fade-up'
                data-aos-duration='1000'
            >
                {t("privacyPolicy")}
            </div>
        </layout>
    );
}

export default Email;
