/* eslint-disable @next/next/no-img-element */
import {
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addUser, removeUser } from "@/redux/shopperSlice";
import { auth } from "@/Utils/firebase";

export default function Signin({ onToggleComponent, onToggleMail }) {
    const { t } = useTranslation("signup");
    const router = useRouter();
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                dispatch(addUser(user));
                router.push("/");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user !== user) {
                setUser(user);
                dispatch(addUser(user));
            } else if (user === null && user !== null) {
                setUser(null);
                dispatch(removeUser());
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-0 h-screen'>
            <div className='md:col-span-1 h-screen'>
                <div className='flex h-screen items-center justify-center'>
                    <div className='top-20 flex gap-4 ml-[35%] absolute text-right'>
                        <h2 className=''>{t("signin.donthaveAccount")}</h2>
                        <button
                            className='text-[#20DC49] '
                            onClick={() => onToggleComponent("signup")}
                        >
                            {t("signin.signUp")}
                        </button>
                    </div>
                    <div className='text-center w-[50%]'>
                        <p className='mb-10 font-bold text-[150%]'>
                            {t("signin.wlcmback")}
                        </p>
                        <p className='mb-10 text-[100%] text-gray-500'>
                            {t("signin.loginacc")}
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
                            <div className='top-5 flex flex-row-reverse mr-5'>
                                <button
                                    onClick={() => onToggleMail("email")}
                                    className='text-[#D93F21] '
                                >
                                    {t("signin.recover")}
                                </button>
                            </div>
                            {error && <p className='text-red-500'>{error}</p>}
                            <button
                                type='submit'
                                className='bg-[#20DC49] text-black rounded px-4 mt-3 py-2'
                            >
                                {t("signin.login")}
                            </button>
                        </form>
                    </div>
                </div>
                <p className='text-left ml-20  text-gray-500 text-[12px] mb-10 '>
                    {t("signup.termsOfUse")}
                </p>
            </div>
            <div className='relative col-span-1 bg-white h-screen mb-10'>
                <img src='/sign.svg' alt='signin' width='100%' />
            </div>
        </div>
    );
}
