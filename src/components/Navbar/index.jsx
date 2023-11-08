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
    const [showSidebar, setShowSidebar] = useState(false);

    const handleLanguageChange = (languageChange) => {
        setSelectedLanguage(languageChange);
        setIsSelected(false);

        i18n.changeLanguage(languageChange);
    };

    useEffect(() => {
        let price = 0;
        let itemNumber = 0;
        productData.forEach((item) => {
            price += item.price * item.quantity;
            itemNumber += item.quantity;
        });
        setTotalAmt(price.toFixed(2));
    }, [productData]);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <nav className='flex items-center justify-between bg-[#43AFD6] h-16 relative'>
            {/* Logo and the name of the website */}
            <div className='flex items-center space-x-5 ml-10'>
                <Link href='/'>
                    <img src='/Logo.svg' alt='Logo' className='h-[55px]' />
                </Link>
                <div className='md:flex mx-auto justify-items-start text-slate-100 hover:text-gray-500 text-xl font-bold md:text-2xl hidden'>
                    <Link href='/home'>
                        <img
                            src='/LogoFood.svg'
                            alt='LogoFood'
                            className='h-11'
                        />
                    </Link>
                </div>
            </div>
            {/* Large screen navigation */}
            <div className='hidden md:flex px-4 mx-auto font-semibold font-heading space-x-0'>
                <Link href='/home'>
                    <p className='text-slate-100 bg-[#43AFD6] py-5 px-5 hover:bg-[#43acd6]'>
                        {t("navbar.home")}
                    </p>
                </Link>
                <Link href='/coupons'>
                    <p className='text-slate-100 bg-[#43AFD6] py-5 px-5 hover-bg-[#43acd6]'>
                        {t("navbar.coupons")}
                    </p>
                </Link>
                <Link href='/blog'>
                    <p className='text-slate-100 bg-[#43AFD6] py-5 px-5 hover-bg-[#43acd6]'>
                        {t("navbar.blog")}
                    </p>
                </Link>
            </div>

            <div className='flex items-center space-x-5 mr-10'>
                <Link href='Loggin'>
                    <img src='/admin.svg' alt='admin' />
                </Link>
                {/* Cart icon */}
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

                <LanguageDropdown
                    selectedLanguage={selectedLanguage}
                    onLanguageChange={handleLanguageChange}
                />
            </div>

            <div className='md:hidden fixed bottom-4 right-4 z-[2000]'>
                <button
                    className='bg-green-500 z-[2000] w-10 h-14 rounded-full p-2 flex flex-col items-center justify-center text-2xl font-bold text-white space-y-4 relative'
                    onClick={toggleSidebar}
                >
                    ☰
                    {showSidebar && (
                        <div className='absolute -top-8 bg-green-500 w-60 h-8 gap-2 flex justify-center items-center rounded-full'>
                            <Link href='/home'>
                                <p className='text-white text-lg font-semibold'>
                                    {t("navbar.home")}
                                </p>
                            </Link>
                            <Link href='/coupons'>
                                <p className='text-white text-lg font-semibold'>
                                    {t("navbar.coupons")}
                                </p>
                            </Link>
                            <Link href='/'>
                                <p className='text-white text-lg font-semibold'>
                                    {t("navbar.blog")}
                                </p>
                            </Link>
                        </div>
                    )}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
