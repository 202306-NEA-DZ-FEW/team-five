/* eslint-disable @next/next/no-img-element */
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    sendPasswordResetEmail,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";

import { auth } from "@/Utils/firebase";

export default function Email({ onToggleComponent }) {
    const { t } = useTranslation("signup");
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleGoogleSignIn = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(() => {
                router.push("/");
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.error(error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePasswordReset = () => {
        if (formData.email.trim() === "") {
            return;
        }

        sendPasswordResetEmail(auth, formData.email)
            .then(() => {})
            .catch((error) => {
                console.error(error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        sendPasswordResetEmail(auth, formData.email)
            .then(() => {
                router.push("/");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-0 h-screen'>
            <div className='md:col-span-1 bg-gray-300 h-screen'>
                <img
                    src='/signup.svg'
                    alt='signup'
                    width='100%'
                    height='100%'
                />
            </div>
            <div className='col-span-1 bg-white h-screen'>
                <div className='flex h-screen items-center justify-center'>
                    <div className='top-5 flex gap-4 right-5 absolute text-right'>
                        <h2 className=''>{t("signup.haveAccount")}</h2>
                        <button
                            className='text-[#20DC49]  '
                            onClick={() => onToggleComponent("signin")}
                        >
                            {t("signup.signIn")}
                        </button>
                    </div>
                    <div className='text-center w-[50%]'>
                        <p className='mb-10 font-bold text-[150%]'>
                            {t("email.check")}
                        </p>
                        <p className='mb-10 text-[100%] text-gray-500 border bg-gray-100 p-5'>
                            {t("email.spam")}
                        </p>

                        <div className='text-center mt-4 mb-4 relative'>
                            <hr className='border-gray-300 border-t-1 mt-3 absolute w-full' />
                            <p className='relative z-10 bg-white inline '>
                                {t("email.yourmail")}
                            </p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label
                                    className='block text-gray-700 text-sm font-bold mb-2'
                                    htmlFor='email'
                                ></label>
                                <input
                                    className='h-[50px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    type='email'
                                    placeholder={t("signup.emailLabel")}
                                />
                            </div>

                            <button className='bg-[#20DC49] text-black rounded px-4 mt-3 py-2'>
                                {t("email.send")}
                            </button>
                        </form>
                        <div className='top-5 flex flex-row mr-5'>
                            <button className='text-[#D93F21] '>
                                {t("email.help")}
                            </button>
                        </div>
                    </div>
                </div>

                <p className='text-left ml-20  text-gray-500 text-[12px] '>
                    {t("signup.termsOfUse")}
                </p>
            </div>
        </div>
    );
}
