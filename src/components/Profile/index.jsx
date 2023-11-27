import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { removeUser } from "@/redux/shopperSlice";

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const userInfo = useSelector((state) => state.shopper.userInfo);
    const dispatch = useDispatch();

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSignOut = () => {
        const authInstance = getAuth();
        signOut(authInstance)
            .then(() => {
                dispatch(removeUser());
            })
            .catch((error) => {
                console.error("Sign-out error:", error);
            });
    };

    return (
        <div className='relative z-[2000] inline-block text-left '>
            <div>
                <button
                    type='button'
                    className='flex items-center space-x-2 text-white font-semibold focus:outline-none'
                    onClick={handleDropdownToggle}
                >
                    <img
                        className='w-10 h-10  rounded-full'
                        src={
                            userInfo.photoURL ? userInfo.photoURL : "/admin.svg"
                        }
                        alt='icon'
                    />
                </button>
            </div>

            {/* Dropdown menu */}
            {isOpen && (
                <div
                    className='origin-top-right absolute -right-6  mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
                    role='menu'
                    aria-orientation='vertical'
                >
                    <div className='py-1' role='none'>
                        <Link
                            href='/admin'
                            className='flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            role='menuitem'
                            onClick={() => {
                                handleDropdownToggle();
                            }}
                        >
                            Dashboard
                        </Link>

                        <Link
                            href='/admin/coupons'
                            className=' flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            role='menuitem'
                            onClick={() => {
                                handleDropdownToggle();
                            }}
                        >
                            Coupons
                        </Link>
                        <button
                            className=' flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            role='menuitem'
                            onClick={() => {
                                handleDropdownToggle();
                                handleSignOut();
                            }}
                        >
                            SignOut
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
