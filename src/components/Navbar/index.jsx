import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { FaCartPlus, FaHome, FaUser } from "react-icons/fa";
import { FaMicroblog } from "react-icons/fa6";
import { RiCoupon5Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

import Profile from "@/components/Profile";

import LanguageDropdown from "../Language";
function Navbar() {
    const productData = useSelector((state) => state.shopper.productData);
    const [totalAmt, setTotalAmt] = useState("");
    const { t, i18n } = useTranslation("navbar");
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const [isSelected, setIsSelected] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const userInfo = useSelector((state) => state.shopper.userInfo);
    const router = useRouter();
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

    useEffect(() => {
        const currentRoute = router.asPath;
        const currentActive = Menus.findIndex(
            (menu) => menu.link === currentRoute
        );

        setActive(currentActive);
    }, [router.asPath]);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    const Menus = [
        { name: "Cart", icon: FaCartPlus, dis: "translate-x-0", link: "/cart" },
        {
            name: "Blog",
            icon: FaMicroblog,
            dis: "translate-x-16",
            link: "/blog",
        },
        { name: "Home", icon: FaHome, dis: "translate-x-32", link: "/" },
        {
            name: "Coupons",
            icon: RiCoupon5Fill,
            dis: "translate-x-48",
            link: "/coupons",
        },
        { name: "Auth", icon: FaUser, dis: "translate-x-64", link: "/auth" },
    ];
    const [active, setActive] = useState(0);

    const handleMenuClick = (index) => {
        if (index !== active) {
            setActive(index);
        }
    };

    return (
        <div>
            <nav className='hidden md:flex items-center justify-between bg-[#43AFD6] h-16 relative'>
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
                    <Link href='/'>
                        <p className='text-slate-100 bg-[#43AFD6] py-5 px-5 hover:bg-[#43acd6]'>
                            {t("navbar.home")}
                        </p>
                    </Link>
                    <Link href='/Coupons'>
                        <p className='text-slate-100 bg-[#43AFD6] py-5 px-5 hover-bg-[#43acd6]'>
                            {t("navbar.coupons")}
                        </p>
                    </Link>
                    <Link href='/Blog'>
                        <p className='text-slate-100 bg-[#43AFD6] py-5 px-5 hover-bg-[#43acd6]'>
                            {t("navbar.blog")}
                        </p>
                    </Link>
                </div>
                <div className='flex items-center space-x-5 mr-10'>
                    {userInfo ? (
                        <Profile />
                    ) : (
                        <Link href='Loggin'>
                            <img src='/admin.svg' alt='admin' />
                        </Link>
                    )}

                    {/* Cart icon */}
                    <div className='mt-1 flex flex-col justify-center items-center gap-0 relative'>
                        <Link href='/cart'>
                            <img src='/cart.svg' alt='cart' width='38' />
                        </Link>
                        <p className='w-full h-5 mt-[-8px] text-center font-bold text-white rounded-full'>
                            ${totalAmt}
                        </p>
                        <span className='absolute w-5 h-5 mt-[-3px]  bg-yellow-200 text-center font-bold text-black top-[3px] right-0 rounded-full'>
                            {productData.length > 0 ? productData.length : 0}
                        </span>
                    </div>

                    <LanguageDropdown
                        selectedLanguage={selectedLanguage}
                        onLanguageChange={handleLanguageChange}
                    />
                </div>
            </nav>

            <div className=' fixed bottom-0 left-0 right-0 flex justify-center z-10 md:hidden'>
                <div className='bg-[#43AFD6] max-h-[3.2rem] px-6 h-[150px] rounded-t-xl'>
                    <ul className='flex relative'>
                        {Menus && active >= 0 && active < Menus.length && (
                            <span
                                className={`bg-white-500 duration-500 ${
                                    Menus[active]?.dis || ""
                                } bg-green-500 border-4 border-transparent-900 h-16 w-16 absolute -top-5 rounded-full`}
                            >
                                <span className='w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1'></span>
                                <span className='w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2'></span>
                            </span>
                        )}
                        {Menus.map((menu, i) => (
                            <li key={i} className='w-16'>
                                <Link
                                    href={menu.link}
                                    className='flex flex-col text-center pt-6'
                                    onClick={() => handleMenuClick(i)}
                                >
                                    <span
                                        className={`${
                                            active === i
                                                ? "text-2xl cursor-pointer  duration-500 z-10 -mt-6 ml-5 text-black"
                                                : "-mt-2 ml-5 text-xl cursor-pointer duration-500 z-10 text-white"
                                        }`}
                                    >
                                        {<menu.icon />}
                                    </span>
                                    <span
                                        className={`${
                                            active === i
                                                ? "translate-y-4 duration-700 opacity-100 -mt-1 font-bold"
                                                : "opacity-0 translate-y-10 "
                                        }`}
                                    ></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
