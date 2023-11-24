import AOS from "aos";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import React, { useEffect } from "react";

import "aos/dist/aos.css";

function Steps() {
    useEffect(() => {
        AOS.init();
    }, []);

    const { t } = useTranslation("steps");

    return (
        <div style={{ backgroundColor: "#F9FAFB" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                }}
            ></div>

            <center className='mt-20 text-[#212B36]'>
                {/* the title */}
                <b style={{ fontSize: "50px" }}>{t("donationprocess")}</b>
            </center>
            <br />

            <div
                className='grid grid-cols-4 gap-40 flex-wrap'
                style={{
                    textAlign: "center",
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    textAlignLast: "center",
                }}
            >
                <div data-aos='fade-up' data-aos-duration='1000'>
                    {/* the illustration of the steps*/}
                    <Image
                        src='/phone.png'
                        alt='this is an image'
                        width={300}
                        height={400}
                    />
                    <div>
                        {/* the step 1 section */}
                        <b>
                            <center className='text-[23px] font-bold text-[#212B36]'>
                                {t("step")}1
                            </center>
                        </b>
                        <p className='text-[#212B36]'>
                            {t("Donatorbuythecoupon")}
                            <br /> {t("inthewebsite")}
                        </p>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-duration='1000'>
                    <Image
                        src='/people.png'
                        alt='this is an image'
                        width={300}
                        height={400}
                    />
                    <div>
                        <b>
                            <center>
                                {/* the step two section */}
                                <b className='text-[23px] font-bold text-[#212B36]'>
                                    {t("step")} 2
                                </b>
                            </center>
                        </b>
                        <p className='text-[#212B36]'>
                            {t("thepersoninneedcan")}
                            <br /> {t("eatwithoutaskingin")}
                            <br /> {t("anyavailableRestaurant")}
                        </p>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-duration='1000'>
                    <Image
                        src='/food.png'
                        alt='this is an image'
                        width={300}
                        height={400}
                    />
                    <div>
                        <center>
                            {/* the step three section */}
                            <b className='text-[23px] font-bold text-[#212B36]'>
                                {t("step")} 3
                            </b>
                        </center>
                        <p className='mb-20 text-[#212B36]'>
                            {t("theRestaurantdelete")} <br />
                            {t("theusedcouponinthe")}
                            <br />
                            {t("website")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Steps;
