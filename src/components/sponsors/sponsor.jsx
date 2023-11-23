import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
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
            <div data-aos='fade-up' data-aos-duration='600'>
                <center className='pt-10 '>
                    <b style={{ fontSize: "50px" }} className='text-[#212B36]'>
                        {t("Oursponsor")}
                    </b>
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
            <div className='flex flex-col  lg:flex-row flex-wrap bg-[#80D6F6] mt-10 justify-center items-center '>
                <div
                    className='w-1/2 flex items-center justify-start  lg:ml-10 basis-3/12'
                    data-aos='fade-right'
                    data-aos-duration='600'
                >
                    <img alt='image' src='/comm.png' width={300} height={20} />
                </div>
                <div
                    className='w-1/2 text-white mt-10 basis-2/3 lg:p-20 flex flex-col gap-5'
                    data-aos='fade-left'
                    data-aos-duration='1000'
                >
                    <h1 className='text-5xl mt-30 font-bold'>{t("joinus")}</h1>
                    <p className='md:text-xl  text-base mt-10'>{t("disc")}</p>
                    <Link href='/auth'>
                        <button className='py-2 px-5 lg:px-10  font-semibold shadow-md hover:bg-green-600  focus:ring-opacity-75 rounded-full bg-[#20DC49] mt-10 mr-10 mb-10 text-lg md:text-xl'>
                            {t("donation")} ❤
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Sponsor;
