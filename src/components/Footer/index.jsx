import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

export default function Footer() {
    const current_year = new Date().getFullYear();
    const { t } = useTranslation("footer");
    return (
        <div>
            <div className='mx-auto text-white bg-[#43AFD6] py-6 '>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center items-center ml-10 sm:ml-10 md:ml-20 lg:ml-40 xl:ml-40'>
                    <div className='space-y-3 '>
                        <div>
                            <Image
                                src='/footer_icons/logo.svg'
                                alt='logo-image'
                                width={40}
                                height={70}
                            />
                        </div>
                        <div>
                            <h1 className='text-3xl'>
                                <b>Food on coupon</b>
                            </h1>
                        </div>
                        <div>
                            <p>{t("footer.description")}</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='space-y-1 space-x-10'>
                            <Link href='/Home'>
                                <b className='text-white'>
                                    {t("footer.homePage")}
                                </b>
                            </Link>
                            <Link href='/Coupons'>
                                <b className='text-white'>
                                    {t("footer.couponsPage")}
                                </b>
                            </Link>
                            <Link href='/Blog'>
                                <b className='text-white'>
                                    {t("footer.blogPage")}
                                </b>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
                            <div
                                className='flex items-center flex-col space-x-2 text-center'
                                style={{ flex: "1" }}
                            >
                                <Image
                                    src='/footer_icons/map-marker.svg'
                                    alt='map-marker'
                                    width={40}
                                    height={40}
                                />
                                <p>{t("footer.address")}</p>
                            </div>
                            <div
                                className='flex items-center flex-col space-x-2 text-center'
                                style={{ flex: "1" }}
                            >
                                <Image
                                    src='/footer_icons/phone-marker.svg'
                                    alt='phone-marker'
                                    width={40}
                                    height={40}
                                />
                                <p>
                                    +229-955-5388-336 <br />
                                    +229-955-5373-360
                                </p>
                            </div>
                            <div
                                className='flex items-center flex-col space-x-2 text-center'
                                style={{ flex: "1" }}
                            >
                                <Image
                                    src='/footer_icons/email-marker.svg'
                                    alt='email-marker'
                                    width={40}
                                    height={40}
                                />
                                <p>
                                    office@mail.com <br />
                                    support@mail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div>
                            <h3 className='pb-5'>
                                <b>{t("footer.subNewsletter")}</b>
                            </h3>
                        </div>
                        <div className='flex items-center'>
                            <div>
                                <input
                                    type='email'
                                    className='p-1'
                                    placeholder={t("footer.emailEnter")}
                                />
                            </div>
                            <div>
                                <button className='submit-button bg-[#20DC49] p-1 pl-3 pr-3 text-white'>
                                    {t("footer.submit")} →
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center space-x-10'>
                            <a href='http://www.twitter.com'>
                                <FaTwitter className='text-2xl' />
                            </a>
                            <a href='http://www.linkedin.com'>
                                <FaLinkedin className='text-2xl' />
                            </a>
                            <a href='http://www.instagram.com'>
                                <FaInstagram className='text-2xl' />
                            </a>
                            <a href='http://www.facebook.com'>
                                <FaFacebookF className='text-2xl' />
                            </a>
                            <a href='http://www.youtube.com'>
                                <FaYoutube className='text-2xl' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#20DC49] h-10 flex justify-center items-center text-white'>
                <p>
                    © {current_year} {t("footer.right")}
                </p>
            </div>
        </div>
    );
}
