/* eslint-disable @next/next/no-img-element */
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    sendEmailVerification,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";

import { auth } from "@/Utils/firebase";

export default function Signup({ onToggleComponent }) {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password,
            formData.name
        )
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: formData.name,
                })
                    .then(() => {
                        sendEmailVerification(user)
                            .then(() => {
                                router.push("/");
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    })
                    .catch((error) => {
                        console.error(error);
                    });
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
                            {t("signup.registrationSavesLives")}
                        </p>
                        <p className='mb-10 text-[100%] text-gray-500'>
                            {t("signup.gettingStarted")}
                        </p>
                        <button
                            onClick={handleGoogleSignIn}
                            className='text-black rounded border-[1px] border-[#20DC49] px-4 py-2 mb-5 flex items-center justify-center space-x-2 mx-auto'
                        >
                            <img
                                src='/google.svg'
                                alt='Google'
                                className='w-6 h-6'
                            />
                            <span>{t("signup.googleButton")}</span>
                        </button>

                        <div className='text-center mt-4 mb-4 relative'>
                            <hr className='border-gray-300 border-t-1 mt-3 absolute w-full' />
                            <p className='relative z-10 bg-white inline '>
                                {t("signup.orContinueWith")}
                            </p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label
                                    className='h-[50px] block text-gray-700 text-sm font-bold mb-2'
                                    htmlFor='name'
                                ></label>
                                <input
                                    className='h-[50px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    type='text'
                                    placeholder={t("signup.nameLabel")}
                                />
                            </div>
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
                            <div className='mb-4'>
                                <label
                                    className='block text-gray-700 text-sm font-bold mb-2'
                                    htmlFor='password'
                                ></label>
                                <input
                                    className='h-[50px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='password'
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    type='password'
                                    placeholder={t("signup.passwordLabel")}
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    className='block text-gray-700 text-sm font-bold mb-2'
                                    htmlFor='confirmPassword'
                                ></label>
                                <input
                                    className='h-[50px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    type='password'
                                    placeholder={t(
                                        "signup.confirmPasswordLabel"
                                    )}
                                />
                            </div>
                            <button className='bg-[#20DC49] text-black rounded px-4 mt-3 py-2'>
                                {t("signup.createAccountButton")}
                            </button>
                        </form>
                    </div>
                </div>
                <p className='text-left ml-20  text-gray-500 text-[12px] '>
                    {t("signup.termsOfUse")}
                </p>
            </div>
        </div>
    );
}
