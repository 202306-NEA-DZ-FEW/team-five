import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";

function Sponsor() {
    const { t } = useTranslation("sponsor");
    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "400px",
                    border: "3px solid red",
                }}
            >
                <center>
                    <b style={{ fontSize: "19px" }}>{t("Oursponsor")}</b>
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
            <div
                style={{
                    width: "100%",
                    height: "400px",

                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div
                    class='flex flex-nowrap bg-blue-800 mt-10'
                    style={{ overflow: "hidden" }}
                >
                    <div>
                        <Image
                            alt='image'
                            src='/mask.png'
                            width={1000}
                            height={20}
                            style={{ marginTop: "40px", marginLeft: "100px" }}
                        />
                    </div>
                    <div>
                        <b
                            style={{
                                display: "flex",
                                flexWrap: "wrap",

                                width: "100px",
                                marginTop: "130px",
                                position: "absolute",
                                color: "white",
                                fontSize: "20px",
                            }}
                        >
                            {t("joinus")}
                        </b>
                    </div>
                    <div>
                        <p
                            style={{
                                marginTop: "200px",
                                color: "white",
                            }}
                        >
                            Lorem ipsum is placeholder text commonly used in the
                            graphic, print, and publishing industries for
                            previewing layouts and visual mockups Lorem ipsum is
                            placeholder text commonly used in the graphic,
                            print, and publishing industries for previewing
                            layouts and visual mockups..
                        </p>
                    </div>
                    <p style={{ marginTop: "300px", marginRight: "100px" }}>
                        <button class='py-2 px-4 text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 rounded-full bg-[#8CC540]'>
                            {t("donation")}
                        </button>
                    </p>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <Link href='/sponsor' locale='en'>
                    English
                </Link>
                <Link href='/sponsor' locale='ar'>
                    العربية
                </Link>
            </div>
        </>
    );
}

export default Sponsor;
