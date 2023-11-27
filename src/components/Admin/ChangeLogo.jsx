/* eslint-disable no-console */
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import {
    doc,
    getDoc,
    getFirestore,
    setDoc,
    updateDoc,
} from "firebase/firestore";
import {
    getDownloadURL,
    getStorage,
    ref,
    updateMetadata,
    uploadBytes,
} from "firebase/storage";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import { auth } from "@/Utils/firebase";

const ChangeLogo = ({ CouponAmount }) => {
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);
    const [userName, setUserName] = useState("");
    const [, setUserAmount] = useState("");
    const [userId, setUserId] = useState(null);
    const [profilePhotoURL, setProfilePhotoURL] = useState(null);
    const [user, setUser] = useState(null);
    const [isUploadingProfilePhoto] = useState(false);
    const { t } = useTranslation("admin");

    const types = ["image/png", "image/jpeg"];

    const storageRef = getStorage();
    const firestore = getFirestore();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userUID = user.uid;
                setUserId(userUID);
                setUserName(user.displayName || "");
                setProfilePhotoURL(user.photoURL);
                setUser(user);
                setUserAmount(CouponAmount);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    const onProfilePhotoDrop = async (acceptedFiles) => {
        const file = acceptedFiles[0];

        if (!user) {
            console.error("User is not authenticated.");
            return;
        }

        const profilePhotoStorageRef = ref(
            storageRef,
            `logo/${user.uid}/${file.name}`
        );

        try {
            await uploadBytes(profilePhotoStorageRef, file);

            const downloadURL = await getDownloadURL(profilePhotoStorageRef);

            await updateProfile(auth.currentUser, {
                photoURL: downloadURL,
            });

            setProfilePhotoURL(downloadURL);
        } catch (error) {
            console.error("Error uploading or updating profile photo:", error);
        }
    };

    const onDrop = (acceptedFiles) => {
        const selectedFile = acceptedFiles[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError("");
        } else {
            setProductImg(null);
            setError("Please select a valid image type (jpg or png)");
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: onDrop,
        accept: "image/png, image/jpeg",
    });

    const addProduct = async (e) => {
        e.preventDefault();

        setError("");
        setUploading(true);

        try {
            if (!productImg) {
                setError("Please select a valid image type (jpg or png)");
                setUploading(false);
                return;
            }

            await onProfilePhotoDrop([productImg]);

            const imgRef = ref(storageRef, `logo/${userId}/${productImg.name}`);
            await uploadBytes(imgRef, productImg);

            const metadata = {
                customMetadata: {},
            };
            await updateMetadata(imgRef, metadata);

            const imgUrl = await getDownloadURL(imgRef);

            const userDocRef = doc(firestore, "users", userId);
            const docSnapshot = await getDoc(userDocRef);

            if (docSnapshot.exists()) {
                await updateDoc(userDocRef, {
                    ProductImg: imgUrl,
                    UserName: userName,
                    CouponAmount: CouponAmount,
                });
            } else {
                await setDoc(userDocRef, {
                    ProductImg: imgUrl,
                    UserName: userName,
                    CouponAmount: CouponAmount,
                });
            }

            setProductImg(null);
            setUploading(false);
        } catch (error) {
            console.error("Error uploading product image:", error);
            setUploading(false);
        }
    };

    return (
        <div className='container mx-auto p-4 text-center'>
            <div className='flex items-center justify-center mb-4'></div>
            <form
                autoComplete='off'
                className='space-y-4'
                onSubmit={addProduct}
            >
                <div
                    {...getRootProps()}
                    className='border-2 border-dashed p-4 border-green-500 flex justify-center items-center h-60'
                >
                    <input
                        {...getInputProps()}
                        accept='image/png, image/jpeg'
                    />
                    {isUploadingProfilePhoto ? (
                        <p> {t("edit.Upload")}</p>
                    ) : profilePhotoURL ? (
                        <div className='flex flex-col items-center'>
                            <img
                                src={profilePhotoURL}
                                alt='Profile Photo'
                                className='max-h-60 h-20 mb-5'
                            />
                            <p>{t("edit.uploadphototext")}</p>
                        </div>
                    ) : (
                        <div>
                            <p>{t("edit.uploadphototext")}</p>
                        </div>
                    )}
                </div>
                {uploading && (
                    <p className='text-blue-500'>{t("edit.uploading")}</p>
                )}
                {error && <p className='text-red-500'>{error}</p>}
                <button
                    type='submit'
                    className='bg-green-500 text-white rounded px-4 py-2 hover:bg-blue-500 transition duration-300 ease-in-out'
                >
                    {t("edit.Upload")}
                </button>
            </form>
        </div>
    );
};

export default ChangeLogo;
