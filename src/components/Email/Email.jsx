import AOS from "aos";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";

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
                    <div className='m-2'>
                        <input
                            type='email'
                            placeholder={t("email")}
                            name='email'
                            className='border-2 border-gray-300 rounded-lg h-11 w-full placeholder:px-3'
                        />
                    </div>

                    <input
                        type='hidden'
                        name='_subject'
                        value='New submission'
                    />

                    <button className='bg-[#20DC49]  text-white rounded-full p-2 px-3 text-[9px] sm:text-base sm:px-6 text-center cursor-pointer font-medium hover:bg-green-600  mt-2'>
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
                className=' hidden md:flex justify-evenly md:gap-48 lg:gap-96 '
                data-aos='fade-up'
                data-aos-duration='1000'
            >
                <div className='lg:ml-6'>
                    <h1 className='text-gray-500 font-bold text-lg'>
                        <p>{t("GetupdateonBlogandEvents")}</p>
                    </h1>
                    <h2 className='text-gray-400 font-bold text-lg'>
                        <p>{t("Getdirectlyonyouremail")}</p>
                    </h2>
                </div>
                <div className=''>
                    <form
                        action='https://formsubmit.co/sidisaidmel@gmail.com'
                        method='POST'
                    >
                        <input
                            type='email'
                            placeholder={t("email")}
                            name='email'
                            className='border-2 border-gray-300 rounded-lg h-11 placeholder:px-3'
                            style={{ width: "400px" }}
                        />

                        <input
                            type='hidden'
                            name='_subject'
                            value='New submission!'
                        />

                        <button className='bg-[#20DC49] ml-2 text-white rounded-full p-2 px-3 text-base sm:text-base sm:px-6 text-center cursor-pointer font-medium hover:bg-green-600'>
                            {t("Subscribe")}
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
                className='text-center mt-2 mb-10'
                data-aos='fade-up'
                data-aos-duration='1000'
            >
                <p>{t("privacyPolicy")}</p>
            </div>
        </layout>
    );
}

export default Email;
