import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";

function Sponsor() {
    const { t } = useTranslation("sponsor");
    return (
        <>
            <div>
                <center className='mt-10'>
                    <b style={{ fontSize: "30px" }}>{t("Oursponsor")}</b>
                </center>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        marginTop: "40px",
                    }}
                >
                    <Image
                        alt='image'
                        src='/burger.png'
                        width={200}
                        height={30}
                        style={{ marginTop: "40px" }}
                    />
                    <Image
                        alt='image'
                        src='/macdo.png'
                        width={200}
                        height={30}
                        style={{ marginTop: "40px" }}
                    />

                    <Image
                        alt='image'
                        src='/Tesco.png'
                        width={200}
                        height={30}
                        style={{ marginTop: "4px" }}
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
            <div className='flex flex-nowrap bg-[#80D6F6] mt-20'>
                <div className='w-1/2 flex items-center justify-center'>
                    <img
                        alt='image'
                        src='/comm.png'
                        className='mt-10'
                        width={300}
                        height={20}
                    />
                </div>
                <div className='w-1/2 text-white relative mt-20 ml-[-200px]'>
                    <b className='text-4xl mt-30'>{t("joinus")}</b>
                    <p className='text-xl mt-10'>{t("disc")}</p>
                    <button className='py-2 px-4 ml-[200px] text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 rounded-full bg-[#8CC540] mt-4 mr-10'>
                        {t("donation")}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Sponsor;
