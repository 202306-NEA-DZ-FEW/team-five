import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import LanguageDropdown from "../Language";

function Navbar() {
    const productData = useSelector((state) => state.shopper.productData);
    const [totalAmt, setTotalAmt] = useState("");

    const { t, i18n } = useTranslation("navbar");
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const [isSelected, setIsSelected] = useState(false);

    const handleLanguageChange = (languageChange) => {
        setSelectedLanguage(languageChange);
        setIsSelected(false);
        i18n.changeLanguage(languageChange);
    };

    useEffect(() => {
        let price = 0;
        productData.map((item) => {
            price += item.price * item.quantity;
            return price;
        });
        setTotalAmt(price.toFixed(2));
    }, [productData]);

    return (
        <nav className='flex items-center justify-center  bg-[#43AFD6] h-16'>
            <div className='flex items-center justify-center gap-40'>
                {/* Logo and the name of the website the icon */}

                <div className='flex items-center space-x-5'>
                    <Link href='/'>
                        <img src='/Logo.svg' alt='Logo' className='mt-4' />
                    </Link>
                    <div className='md:flex mx-auto justify-items-start text-slate-100 hover:text-gray-500 text-xl font-bold md:text-2x hidden'>
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
                        <p className='text-slate-100 bg-[#43AFD6] py-5 px-5 hover:bg-[#43acd6]'>
                            {t("navbar.home")}
                        </p>
                    </Link>
                    <Link href='/coupons'>
                        <p className='text-slate-100 bg-[#43AFD6] py-5 px-5 hover:bg-[#43acd6]'>
                            {t("navbar.coupons")}
                        </p>
                    </Link>
                    <Link href='/Blog'>
                        <p className='text-slate-100 bg-[#43AFD6] py-5 px-5 hover:bg-[#43acd6]'>
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

                    <div className='mt-1 flex flex-col justify-center items-center gap-0 relative'>
                        <Link href='/cart'>
                            <img src='/cart.svg' alt='cart' width='38' />
                        </Link>
                        <p className='w-full h-5 mt-[-8px] text-center font-bold text-white rounded-full'>
                            ${totalAmt}
                        </p>
                        <span className='absolute w-5 h-5 mt-[-2px] bg-yellow-200 text-center font-bold text-black top-[3px] right-2 rounded-full'>
                            {productData.length > 0 ? productData.length : 0}
                        </span>
                    </div>

                    <div>
                        <div className='flex items-center space-x-5'>
                            <LanguageDropdown
                                selectedLanguage={selectedLanguage}
                                onLanguageChange={handleLanguageChange}
                            />
                            <div onClick={() => setIsSelected(!isSelected)}>
                                {isSelected ? (
                                    <Link href='/' locale='en'></Link>
                                ) : (
                                    <Link href='/' locale='ar'></Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
