import AOS from "aos";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import React, { useEffect } from "react";

import "aos/dist/aos.css";

const Goal = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const { t } = useTranslation("steps");

    return (
        <div>
            <center className='mt-10'>
                <b style={{ fontSize: "50px" }}>{t("goal")}</b>
            </center>
            <div
                className='grid grid-cols-4 gap-40  flex-wrap'
                style={{
                    textAlign: "center",
                    marginTop: "50px",
                    display: "flex",
                    justifyContent: "center",
                    textAlignLast: "center",
                }}
            >
                <div data-aos='fade-up' data-aos-duration='1000'>
                    <Image
                        src='/icon.png'
                        width={250}
                        height={300}
                        alt='this is an image '
                    />
                    <div>
                        <center>
                            <b style={{ fontSize: "40px" }}>
                                {t("NO")}
                                <br />
                                {t("POVERTY")}
                            </b>
                        </center>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-duration='1000'>
                    <Image
                        src='/soupe.png'
                        alt='this is an image'
                        width={250}
                        height={300}
                    />
                    <div>
                        <center>
                            <b style={{ fontSize: "40px" }}>
                                {t("ZERO")}
                                <br />
                                {t("HUNGER")}
                            </b>
                        </center>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-duration='1000'>
                    <Image
                        src='/person.png'
                        alt='this is an image'
                        width={250}
                        height={300}
                    />
                    <div className=''>
                        <center className=''>
                            <b style={{ fontSize: "40px" }}>
                                {t("GOOD")}
                                <br />
                                {t("HEALTH")}
                            </b>
                        </center>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-4 ml-20 mr-20'>
                <div
                    className='md:w-35'
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                    data-aos='fade-right'
                >
                    <Image
                        src='/Give.png'
                        width={800}
                        height={200}
                        alt='this is an image'
                    />
                </div>

                <div
                    className='md:w-70'
                    style={{
                        width: "100%",
                    }}
                    data-aos='fade-left'
                >
                    <div style={{ fontSize: "20px", marginTop: "20px" }}>
                        <b>{t("WorkingtogethertoendHunger")}</b>
                    </div>
                    <div>
                        <p>{t("working")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Goal;
