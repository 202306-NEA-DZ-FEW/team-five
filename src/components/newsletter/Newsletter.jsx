import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
function Newsletter() {
    const { t } = useTranslation("newsletter");

    return (
        <>
            <div
                class='grid grid-rows-3 grid-flow-col gap-4'
                style={{ border: "1px solid gray" }}
            >
                <div class='row-span-3 ...'>
                    <Image
                        src='/heart.png'
                        width={400}
                        height={500}
                        alt='image'
                    />
                </div>
                <div class='col-span-2 ...'>
                    <b>{t("joinournewslettertoknowmore")}</b>
                    <h2>{t("weneedyoutostopthehunger")}</h2>
                </div>
                <div class='row-span-2 col-span-2 ...'>
                    <form
                        action='https://formsubmit.co/sidisaidmel@gmail.com'
                        method='POST'
                    >
                        <input
                            type='email'
                            placeholder={t("email")}
                            name='email'
                            class=' border-2 border-gray-300 rounded h-11 '
                            style={{
                                width: "200px",
                                marginLeft: "10px",
                                textAlign: "center",
                            }}
                        />
                        <input
                            type='name'
                            placeholder={t("name")}
                            name='name'
                            class=' border-2 border-gray-300 rounded h-11 '
                            style={{
                                width: "200px",
                                marginLeft: "10px",
                                textAlign: "center",
                            }}
                        />

                        <input
                            type='hidden'
                            name='_subject'
                            value='New submission!'
                        />

                        <button
                            type='submit'
                            class='py-2 px-4 bg-green-500 text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75'
                            style={{ width: "150px", marginLeft: "10px" }}
                        >
                            {t("submit")}
                        </button>
                        <input
                            type='hidden'
                            name='_autoresponse'
                            value='Successfully subscribed'
                        ></input>
                    </form>
                </div>
            </div>
            <div
                class='grid grid-rows-3 grid-flow-col gap-4'
                style={{ border: "1px solid gray" }}
            >
                <div class='row-span-3 ...'>
                    <Image
                        src='/Group.png'
                        width={400}
                        height={500}
                        alt='image'
                    />
                </div>
                <div class='col-span-2 ...'>
                    <b>{t("joinournewslettertoknowmore")}</b>
                    <h2>{t("weneedyoutostopthehunger")}</h2>
                </div>
                <div class='row-span-2 col-span-2 ...'>
                    <form
                        action='https://formsubmit.co/sidisaidmel@gmail.com'
                        method='POST'
                    >
                        <input
                            type='email'
                            placeholder={t("email")}
                            name='email'
                            class=' border-2 border-gray-300 rounded h-11 '
                            style={{
                                width: "200px",
                                marginLeft: "10px",
                                textAlign: "center",
                            }}
                        />
                        <input
                            type='name'
                            placeholder={t("name")}
                            name='name'
                            class=' border-2 border-gray-300 rounded h-11 '
                            style={{
                                width: "200px",
                                marginLeft: "10px",
                                textAlign: "center",
                            }}
                        />

                        <input
                            type='hidden'
                            name='_subject'
                            value='New submission!'
                        />

                        <button
                            type='submit'
                            class='py-2 px-4 bg-green-500 text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75'
                            style={{ width: "150px", marginLeft: "10px" }}
                        >
                            {t("submit")}
                        </button>
                        <input
                            type='hidden'
                            name='_autoresponse'
                            value='Successfully subscribed'
                        ></input>
                    </form>
                </div>
            </div>
            <div
                class='grid grid-rows-3 grid-flow-col gap-4'
                style={{ border: "1px solid gray" }}
            >
                <div class='row-span-3 ...'>
                    <Image
                        src='/flat.png'
                        width={400}
                        height={500}
                        alt='image'
                    />
                </div>
                <div class='col-span-2 ...'>
                    <b>{t("joinournewslettertoknowmore")}</b>
                    <h2>{t("weneedyoutostopthehunger")}</h2>
                </div>
                <div class='row-span-2 col-span-2 ...'>
                    <form
                        action='https://formsubmit.co/sidisaidmel@gmail.com'
                        method='POST'
                    >
                        <input
                            type='email'
                            placeholder={t("email")}
                            name='email'
                            class=' border-2 border-gray-300 rounded h-11 '
                            style={{
                                width: "200px",
                                marginLeft: "10px",
                                textAlign: "center",
                            }}
                        />
                        <input
                            type='name'
                            placeholder={t("name")}
                            name='name'
                            class=' border-2 border-gray-300 rounded h-11 '
                            style={{
                                width: "200px",
                                marginLeft: "10px",
                                textAlign: "center",
                            }}
                        />

                        <input
                            type='hidden'
                            name='_subject'
                            value='New submission!'
                        />

                        <button
                            type='submit'
                            class='py-2 px-4 bg-green-500 text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75'
                            style={{ width: "150px", marginLeft: "10px" }}
                        >
                            {t("submit")}
                        </button>
                        <input
                            type='hidden'
                            name='_autoresponse'
                            value='Successfully subscribed'
                        ></input>
                    </form>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                }}
            >
                <Link href='/newsletter' locale='en'>
                    English
                </Link>
                <Link href='/newsletter' locale='ar'>
                    العربية
                </Link>
            </div>
            {/*  */}
        </>
    );
}

export default Newsletter;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["newsletter"])),
            // Will be passed to the page component as props
        },
    };
}
