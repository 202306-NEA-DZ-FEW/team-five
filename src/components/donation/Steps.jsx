import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";
function Steps() {
    const { t } = useTranslation("steps");

    return (
        <>
            <div style={{ backgroundColor: "#eee" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                    }}
                ></div>
                <Link href='/home' locale='en'>
                    EN/
                </Link>
                <Link href='/home' locale='ar'>
                    AN
                </Link>
                <center>
                    <b style={{ fontSize: "50px" }}>{t("donationprocess")}</b>
                </center>
                <br />

                <div
                    class='grid grid-cols-4 gap-4 flex-wrap '
                    style={{
                        textAlign: "center",
                        marginTop: "100px",
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: "#eee",
                        padding: "100px",
                        textAlignLast: "center",
                    }}
                >
                    <div
                        style={{
                            width: "300px",
                            WebkitBorderRadius: "40px",
                            height: "400px",
                        }}
                    >
                        <Image
                            src='/phone.png'
                            alt='this is an image'
                            width={300}
                            height={400}
                        />
                        <div
                            className=' w-200'
                            style={{
                                width: "300px",
                                height: "400px",
                            }}
                        >
                            <b>
                                <center>{t("step")}1</center>
                            </b>
                            <p>
                                {t("Donatorbuythecoupon")}
                                <br /> {t("inthewebsite")}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "300px",
                            WebkitBorderRadius: "40px",
                            height: "400px",
                        }}
                    >
                        <Image
                            src='/people.png'
                            alt='this is an image'
                            width={300}
                            height={400}
                        />
                        <div
                            className=' w-500'
                            style={{
                                width: "300px",

                                height: "150px",
                            }}
                        >
                            <b>
                                <center>
                                    <b>{t("step")} 2</b>
                                </center>
                            </b>
                            <p>
                                {t("thepersoninneedcan")}
                                <br /> {t("eatwithoutaskingin")}
                                <br /> {t("anyavailableRestaurant")}
                            </p>
                        </div>
                    </div>
                    <div
                        className='w-500'
                        style={{ width: "300px", WebkitBorderRadius: "40px" }}
                    >
                        <Image
                            src='/food.png'
                            alt='this is an image'
                            width={300}
                            height={400}
                        />
                        <div
                            className='w-500'
                            style={{
                                width: "300px",
                                height: "400px",
                            }}
                        >
                            <center>
                                <b>{t("step")} 3</b>
                            </center>
                            <p>
                                {t("theRestaurantdelete")} <br />
                                {t("theusedcouponinthe")}
                                <br />
                                {t("website")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class='grid grid-cols-4 gap-4  flex-wrap'
                style={{
                    textAlign: "center",
                    marginTop: "100px",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "100px",
                    textAlignLast: "center",
                }}
            >
                <div
                    style={{
                        width: "300px",
                        WebkitBorderRadius: "40px",
                        objectFit: "contain",
                    }}
                >
                    <Image
                        src='/Icon.png'
                        width={300}
                        height={400}
                        alt='this is an image '
                    />
                    <div
                        className='w-200'
                        style={{
                            width: "300px",
                            height: "400px",
                        }}
                    >
                        <center>
                            <b style={{ fontSize: "40px" }}>
                                {t("NO")}
                                <br />
                                {t("POVERTY")}
                            </b>
                        </center>
                    </div>
                </div>
                <div
                    style={{
                        width: "300px",
                        WebkitBorderRadius: "40px",
                        objectFit: "contain",
                    }}
                >
                    <Image
                        src='/soupe.png'
                        alt='this is an image'
                        width={300}
                        height={400}
                    />
                    <div
                        className='w-200'
                        style={{
                            width: "300px",

                            height: "350px",
                        }}
                    >
                        <center>
                            <b style={{ fontSize: "40px" }}>
                                {t("ZERO")}
                                <br />
                                {t("HUNGER")}
                            </b>
                        </center>
                    </div>
                </div>
                <div
                    style={{
                        width: "300px",
                        WebkitBorderRadius: "40px",
                        objectFit: "contain",
                    }}
                >
                    <Image
                        src='/person.png'
                        alt='this is an image'
                        width={300}
                        height={400}
                    />
                    <div
                        className=' w-200'
                        style={{
                            width: "300px",

                            height: "350px",
                        }}
                    >
                        <center>
                            <b style={{ fontSize: "40px" }}>
                                {t("GOOD")}
                                <br />
                                {t("HEALTH")}
                            </b>
                        </center>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div
                    style={{
                        width: "30%",
                        height: "200px",
                        position: "relative",
                    }}
                >
                    <Image
                        src='/Give.png'
                        width={700}
                        height={100}
                        alt='this is an image'
                        style={{
                            marginTop: "-80px",
                        }}
                    />

                    <Image
                        src='/play.png'
                        width={50}
                        height={100}
                        alt='this is an image'
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "40%",
                            transform: "translate(-50%, -50%)",
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Steps;
