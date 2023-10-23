import Link from "next/link";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";

function Navbar() {
    const [isSelected, setIsSelected] = useState(false);
    const { t } = useTranslation("common");

    function handleLagSelection() {
        setIsSelected((isSelected) => !isSelected);
    }

    return (
        <nav className='flex items-center justify-center  bg-sky-400 h-16'>
            <div className='flex items-center justify-center gap-40'>
                {/* Logo and the name of the website the icon */}

                <div className='flex items-center space-x-5'>
                    <Link href='/'>
                        <img src='/Logo.svg' alt='Logo' className='mt-4' />
                    </Link>
                    <div className='grid md:flex mx-auto justify-items-start text-slate-100 hover:text-gray-500 text-xl font-bold md:text-2x'>
                        <Link href='/home'>
                            <img
                                src='/LogoFood.svg'
                                alt='LogoFood'
                                className='h-11'
                            />
                        </Link>
                    </div>

                    {/* Navbar component links Home page, Coupons page and Blog page and add EN, AR functionalty */}
                </div>
                <div className='hidden md:flex px-4 mx-auto font-semibold font-heading space-x-0'>
                    <Link href='/home'>
                        <p className='text-slate-100 bg-sky-400 py-5 px-5 hover:bg-sky-300'>
                            {t("navbar.home")}
                        </p>
                    </Link>
                    <Link href='/coupons'>
                        <p className='text-slate-100 bg-sky-400 py-5 px-5 hover:bg-sky-300'>
                            {t("navbar.coupons")}
                        </p>
                    </Link>
                    <Link href='/blog'>
                        <p className='text-slate-100 bg-sky-400 py-5 px-5 hover:bg-sky-300'>
                            {t("navbar.blog")}
                        </p>
                    </Link>
                </div>

                {/* Loggin in icon */}

                <div className='flex items-center space-x-5'>
                    <Link href='Loggin'>
                        <img src='/admin.svg' alt='admin' />
                    </Link>

                    {/* cart icon */}
                    <Link href='/cart'>
                        <img src='/cart.svg' alt='cart' />
                    </Link>
                    <div>
                        <div
                            className='w-10 h-10 font-bold text-center pt-2 bg-white rounded-full'
                            onClick={handleLagSelection}
                        >
                            {isSelected ? (
                                <Link href='/' locale='en'>
                                    EN
                                </Link>
                            ) : (
                                <Link href='/' locale='ar'>
                                    AR
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
