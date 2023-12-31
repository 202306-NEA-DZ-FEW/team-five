import { useRouter } from "next/router";
import React, { useState } from "react";

const LanguageDropdown = ({ selectedLanguage, onLanguageChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (locale) => {
        onLanguageChange(locale);
        router.push(router.asPath, router.asPath, { locale });
        setIsOpen(false);
    };
    return (
        <div className='relative z-[2000] inline-block text-left '>
            <div>
                <button
                    type='button'
                    className='flex items-center space-x-2 text-white font-semibold focus:outline-none'
                    onClick={handleDropdownToggle}
                >
                    {selectedLanguage === "en" ? (
                        <img
                            className='w-6 h-6 rounded-full'
                            src='/gb.svg'
                            alt='US'
                        />
                    ) : (
                        <img
                            className='w-6 h-6 rounded-full'
                            src='/dz.svg'
                            alt='DZ'
                        />
                    )}
                    <span>
                        {selectedLanguage === "en" ? "English" : "العربية"}
                    </span>
                </button>
            </div>

            {/* Dropdown menu */}
            {isOpen && (
                <div
                    className='origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
                    role='menu'
                    aria-orientation='vertical'
                >
                    <div className='py-1' role='none'>
                        <button
                            className='flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left'
                            role='menuitem'
                            onClick={() => changeLanguage("en")}
                        >
                            <img
                                src='/gb.svg'
                                alt='Gb'
                                className='w-4 h-4 mr-2'
                                name='GB'
                            />{" "}
                            English
                        </button>

                        <button
                            className='flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left'
                            role='menuitem'
                            onClick={() => changeLanguage("ar")}
                        >
                            <img
                                src='/dz.svg'
                                alt='dz'
                                className='w-4 h-4 mr-2'
                                name='DZ'
                            />
                            العربية
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageDropdown;
