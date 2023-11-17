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
                    <button className='py-2  lg:px-10 ml-[200px] text-white font-semibold shadow-md hover:bg-green-700  focus:ring-opacity-75 rounded-full bg-[#20DC49] mt-4 mr-10 mb-10'>
                        {t("donation")} ❤
                    </button>
                </div>
            </div>
        </>
    );
}

export default Sponsor;
