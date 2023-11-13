import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function AdminCoupon({ image, UserName, price, _id, coupon, onRemove }) {
    const { t } = useTranslation(["cart"]);

    const handleRemoveCoupon = async () => {
        if (onRemove) {
            onRemove();
        }
    };

    return (
        <div className='relative bg-green-500 hover:bg-green-900 h-[490px] border rounded-[20px]  p-4'>
            <div className='flex flex-col items-center gap-1'>
                <img
                    className='w-[200px] h-[200px] rounded-lg  '
                    src={image}
                    alt={UserName}
                />

                <div className='h-[2px] w-[300px] mb-1 ml-4 border-dashed border-t-[2px]'></div>

                <div className='flex-1'>
                    <h2 className='text-2xl text-center md:text-4xl font-bold text-white mb-5'>
                        {UserName}
                    </h2>

                    <p className='text-xl md:text-2xl font-semibold text-white mb-5'>
                        {t("couponCard.coupon")} {coupon}
                    </p>
                    <p className='text-xl md:text-2xl font-semibold text-white'>
                        {t("couponCard.price")} ${price}
                    </p>
                    <div className='mt-10 flex items-end justify-center'>
                        <button
                            onClick={handleRemoveCoupon}
                            className='text-3xl text-white hover:underline hover:text-gray-800 focus:outline-none'
                        >
                            {t("couponCard.remove")}
                        </button>
                    </div>
                </div>
            </div>

            <div className='absolute top-1/2 left-[-35px] bg-white w-10 h-10 md:w-[70px] md:h-[70px] xl:w-16 xl:h-16 rounded-full transform -translate-y-1/2'></div>
            <div className='absolute top-1/2 right-[-35px] bg-white w-10 h-10 md:w-[70px] md:h-[70px] xl:w-16 xl:h-16 rounded-full transform -translate-y-1/2'></div>
        </div>
    );
}

export default AdminCoupon;
