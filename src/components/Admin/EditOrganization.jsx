import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { auth } from "@/Utils/firebase";
import {
    updateProfile,
    getAuth,
    signOut,
    updateEmail,
    updatePassword,
    EmailAuthProvider,
    reauthenticateWithCredential,
} from "firebase/auth";
import { useRouter } from "next/router";
import SignOutButton from "@/components/Admin/EditOrganization";
import { removeUser } from "@/redux/shopperSlice";
import { useDispatch } from "react-redux";

export default function EditOrganization() {
    const { t } = useTranslation("admin");
    const user = useSelector((state) => state.shopper.userInfo);
    const router = useRouter();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: user?.displayName || "",
        email: user?.email || "",
        password: "",
        confirmPassword: "",
        currentPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            return;
        }

        const authInstance = getAuth();
        const user = authInstance.currentUser;

        const updatedData = {};

        if (formData.name) {
            updatedData.displayName = formData.name;
        }

        const credential = EmailAuthProvider.credential(
            user.email,
            formData.currentPassword
        );

        reauthenticateWithCredential(user, credential)
            .then(() => {
                if (!user.emailVerified) {
                    console.error("Email is not verified");
                    return;
                }

                if (formData.email) {
                    if (formData.email !== user.email) {
                        updateEmail(user, formData.email)
                            .then(() => {})
                            .catch((error) => {
                                console.error("Email update error:", error);
                            });
                    }
                }

                if (formData.password) {
                    updatePassword(user, formData.password)
                        .then(() => {})
                        .catch((error) => {
                            console.error("Password update error:", error);
                        });
                }

                updateProfile(user, updatedData)
                    .then(() => {
                        handleSignOut();
                    })
                    .catch((error) => {
                        console.error("Profile update error:", error);
                    });
            })
            .catch((error) => {
                console.error("Re-authentication error:", error);
            });
    };
    const handleSignOut = () => {
        const authInstance = getAuth();
        signOut(authInstance)
            .then(() => {
                dispatch(removeUser());
                router.push("/auth");
            })
            .catch((error) => {
                console.error("Sign-out error:", error);
            });
    };

    return (
        <div className='text-center w-[50%] items-center justify-center '>
            <div className='text-center mt-4 mb-4 relative '>
                <hr className='border-gray-300 border-t-1 mt-3 absolute w-full ' />
                <p className='relative z-10 bg-white inline '>
                    {t("edit.changeemail")}
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='mb-4 '>
                    <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='email'
                    ></label>
                    <input
                        className='h-[50px] text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        type='email'
                        placeholder={t("edit.email")}
                    />
                </div>
                <div className='text-center mt-4 mb-4 relative '>
                    <hr className='border-gray-300 border-t-1 mt-3 absolute w-full ' />
                    <p className='relative z-10 bg-white inline '>
                        {t("edit.name")}
                    </p>
                </div>
                <div className='mb-4'>
                    <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='name'
                    ></label>
                    <input
                        className='h-[50px] text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        type='text'
                        placeholder={t("edit.nameoforg")}
                    />
                </div>
                <div className='text-center mt-4 mb-4 relative '>
                    <hr className='border-gray-300 border-t-1 mt-3 absolute w-full ' />
                    <p className='relative z-10 bg-white inline '>
                        {t("edit.changepassword")}
                    </p>
                </div>

                <div className='mb-4'>
                    <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='password'
                    ></label>
                    <input
                        className='h-[50px] text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        type='password'
                        placeholder={t("edit.newpass")}
                    />
                </div>

                <div className='mb-4'>
                    <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='confirmPassword'
                    ></label>
                    <input
                        className='h-[50px] text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='confirmPassword'
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        type='password'
                        placeholder={t("edit.confirmpass")}
                    />
                </div>
                <div className='text-center mt-4 mb-4 relative '>
                    <hr className='border-gray-300 border-t-1 mt-3 absolute w-full ' />
                    <p className='relative z-10 bg-white inline '>
                        {t("edit.urcurrent")}
                    </p>
                </div>
                <div className='mb-4'>
                    <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='currentPassword'
                    ></label>
                    <input
                        className='h-[50px] text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='currentPassword'
                        name='currentPassword'
                        value={formData.currentPassword}
                        onChange={handleChange}
                        type='password'
                        placeholder={t("edit.current")}
                    />
                </div>
                <button className='bg-[#20DC49] text-black rounded px-4 mt-3 py-2 mb-10'>
                    {t("edit.update")}
                </button>
            </form>
        </div>
    );
}
