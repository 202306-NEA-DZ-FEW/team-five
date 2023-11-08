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
        <div className='relative'>
            <div className='text-white bg-[#43AFD6] py-6 w-full '>
                <div className='flex flex-row text-xs gap-4 flex-wrap lg:flex-nowrap  justify-center items-center ml-10 mt-10 '>
                    <div className='lg:basis-1/4 grid grid-cols-2 justify-items-stretch gap-5'>
                        <div className='col-span-2 flex gap-4'>
                            <div>
                                <Image
                                    src='/footer_icons/logo.svg'
                                    alt='logo-image'
                                    width={30}
                                    height={60}
                                />
                            </div>

                            <h1 className='text-3xl text-center translate-y-2 font-serif'>
                                <b>Food on coupon</b>
                            </h1>
                        </div>
                        <div className='max-w-[250px] p-5 col-span-2'>
                            <p>{t("footer.description")}</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-full basis-1/2'>
                        <div className='space-x-8 text-white text-center flex md:gap-20'>
                            <Link href='/Home'>
                                <b className=' text-center'>
                                    {t("footer.homePage")}
                                </b>
                            </Link>
                            <Link href='/Coupons'>
                                <b className='text-center'>
                                    {t("footer.couponsPage")}
                                </b>
                            </Link>
                            <Link href='/Blog'>
                                <b className='text-center'>
                                    {t("footer.blogPage")}
                                </b>
                            </Link>
                        </div>
                        <div className='flex flex-col md:flex-row my-10'>
                            <div
                                className='flex items-start flex-col space-x-2  gap-2'
                                style={{ flex: "1" }}
                            >
                                <Image
                                    src='/footer_icons/map-marker.svg'
                                    alt='map-marker'
                                    width={40}
                                    height={40}
                                />
                                <p className='w-28'>{t("footer.address")}</p>
                            </div>
                            <div
                                className='flex items-start flex-col space-x-2  gap-2'
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
                                className='flex items-start flex-col space-x-2 gap-2'
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
                    <div className='lg:ml-10 basis-1/4'>
                        <div>
                            <h3 className='pb-5'>
                                <b>{t("footer.subNewsletter")}</b>
                            </h3>
                        </div>
                        <div className='flex items-center'>
                            <div>
                                <input
                                    type='email'
                                    className='p-1 text-zinc-700 w-48 h-8'
                                    placeholder={t("footer.emailEnter")}
                                />
                            </div>
                            <div>
                                <button className='submit-button bg-[#20DC49] p-2  text-white'>
                                    {t("footer.submit")} →
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center text-xl gap-10 mt-5'>
                            <a href='http://www.twitter.com'>
                                <FaTwitter />
                            </a>
                            <a href='http://www.linkedin.com'>
                                <FaLinkedin />
                            </a>
                            <a href='http://www.instagram.com'>
                                <FaInstagram />
                            </a>
                            <a href='http://www.facebook.com'>
                                <FaFacebookF />
                            </a>
                            <a href='http://www.youtube.com'>
                                <FaYoutube />
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
