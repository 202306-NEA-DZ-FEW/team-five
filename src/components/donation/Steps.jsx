import AOS from "aos";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import React, { useEffect } from "react";

import "aos/dist/aos.css";

function Steps() {
    useEffect(() => {
        // AOS effect Loop
        AOS.init();
    }, []);
    //    adding the translation
    const { t } = useTranslation("steps");

    return (
        // page content
        <div style={{ backgroundColor: "#F9FAFB" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                }}
            ></div>

            <center className='mt-20'>
                {/* the donation process with the translation */}
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
                    {/* the step one section */}
                    <Image
                        src='/phone.png'
                        alt='this is an image'
                        width={300}
                        height={400}
                    />
                    <div>
                        <b>
                            <center className='text-[23px] font-bold'>
                                {t("step")}1
                            </center>
                        </b>
                        <p>
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
                            {/* the step 2 section  */}
                            <center>
                                <b className='text-[23px] font-bold'>
                                    {t("step")} 2
                                </b>
                            </center>
                        </b>
                        <p>
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
                            <b className='text-[23px] font-bold'>
                                {t("step")} 3
                            </b>
                        </center>
                        <p className='mb-20'>
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
