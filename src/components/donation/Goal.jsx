import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Goal = () => {
    const { t } = useTranslation("steps");

    return (
        <div>
            <div
                class='grid grid-cols-4 gap-40  flex-wrap mb-20'
                style={{
                    textAlign: "center",
                    marginTop: "100px",
                    display: "flex",
                    justifyContent: "center",
                    textAlignLast: "center",
                }}
            >
                <div>
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
                <div>
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
                <div>
                    <Image
                        src='/person.png'
                        alt='this is an image'
                        width={250}
                        height={300}
                    />
                    <div className='mb-5'>
                        <center className='mb-5'>
                            <b style={{ fontSize: "40px" }}>
                                {t("GOOD")}
                                <br />
                                {t("HEALTH")}
                            </b>
                        </center>
                    </div>
                </div>
            </div>
            <div className='flex gap-8 justify-center ml-[300px] mr-[250px]'>
                <div
                    style={{
                        width: "35%",
                        height: "200px",
                        position: "relative",
                    }}
                >
                    <Image
                        src='/Give.png'
                        width={800}
                        height={200}
                        alt='this is an image'
                        style={{
                            marginTop: "-80px",
                        }}
                    />
                </div>

                <div
                    className=' w-10'
                    style={{
                        width: "70%",
                        height: "200px",
                        overflow: "hidden",
                    }}
                >
                    <div style={{ fontSize: "20px", marginTop: "20px" }}>
                        <b>{t("WorkingtogethertoendHunger")}</b>
                    </div>
                    <div>
                        <p>
                            Hunger is a global issue, but together, we can make
                            a difference. Communities, global partnerships, and
                            grassroots initiatives are uniting to provide food
                            and support. Education and awareness campaigns are
                            vital, informing people and policymakers about the
                            issue. Donations, volunteering, and advocacy play
                            crucial roles in the fight against hunger. Join us
                            in this collective effort to create a world without
                            hunger.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Goal;
