import AOS from "aos";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import React, { useEffect } from "react";

import "aos/dist/aos.css";

function Sponsor() {
    const { t } = useTranslation("sponsor");

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div data-aos='fade-up' data-aos-duration='1000'>
                <center className='pt-10'>
                    <b style={{ fontSize: "30px" }}>{t("Oursponsor")}</b>
                </center>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                    }}
                >
                    <Image
                        alt='image'
                        src='/Burger.png'
                        width={200}
                        height={30}
                        style={{ marginTop: "40px" }}
                    />
                    <Image
                        alt='image'
                        src='/kfc.png'
                        width={200}
                        height={30}
                        style={{ marginTop: "40px" }}
                    />

                    <Image
                        alt='image'
                        src='/chicken.png'
                        width={200}
                        height={30}
                        style={{ marginTop: "40px" }}
                    />
                    <Image
                        alt='image'
                        src='/pizza.png'
                        width={200}
                        height={30}
                        style={{ marginTop: "40px" }}
                    />
                </div>
            </div>
            <div className='flex flex-col  lg:flex-row flex-wrap bg-[#80D6F6] mt-10 justify-center items-center lg:justify-normal lg:items-start '>
                <div
                    className='w-1/2 flex items-center lg:justify-start justify-center  lg:ml-10 basis-3/12'
                    data-aos='fade-right'
                    data-aos-duration='600'
                >
                    <img alt='image' src='/comm.png' width={300} height={20} />
                </div>
                <div
                    className='w-1/2 text-white mt-20 basis-2/3'
                    data-aos='fade-left'
                    data-aos-duration='1000'
                >
                    <b className='text-4xl mt-30'>{t("joinus")}</b>
                    <p className='text-xl mt-10'>{t("disc")}</p>
                    <button className='py-2 px-4 ml-[200px] text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 rounded-full bg-[#8CC540] mt-4 mr-10 mb-10'>
                        {t("donation")}
                    </button>
                </div>
            </div>

            {/* <div
                className=' bg-[#80D6F6] mt-20 text-white'
                data-aos='fade-up'
                data-aos-duration='600'
            >
                <div className='flex flex-col items-center justify-center ml-10 mr-10'>
                    <img
                        alt='image'
                        src='/comm.png'
                        className='mt-10'
                        width={300}
                        height={20}
                    />
                    <b className='text-4xl mt-30'>{t("joinus")}</b>
                    <p className='text-xl mt-10'>{t("disc")}</p>
                    <button className='py-2 px-4 text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 rounded-full bg-[#8CC540] mt-4 mb-10'>
                        {t("donation")}
                    </button>
                </div>
            </div> */}
        </>
    );
}

export default Sponsor;
