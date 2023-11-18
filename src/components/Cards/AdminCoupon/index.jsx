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
        <div className=''>
            <div className='absolute z-[-4] w-[250px] md:w-[390px] flex justify-center items-center'>
                <svg
                    viewBox='0 0 430 510'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g filter='url(#filter0_d_3477_3596)'>
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M3 18C3 8.61115 10.6112 1 20 1H410C419.389 1 427 8.61116 427 18V180.939C424.92 180.326 422.743 180 420.5 180C405.864 180 394 193.879 394 211C394 228.121 405.864 242 420.5 242C422.743 242 424.92 241.674 427 241.061V488C427 497.389 419.389 505 410 505H20C10.6111 505 3 497.389 3 488V241.061C5.07979 241.674 7.25736 242 9.5 242C24.1355 242 36 228.121 36 211C36 193.879 24.1355 180 9.5 180C7.25736 180 5.07979 180.326 3 180.939V18Z'
                            fill='#20DC49'
                        />
                    </g>
                    <defs>
                        <filter
                            id='filter0_d_3477_3596'
                            x='0'
                            y='0'
                            width='430'
                            height='510'
                            filterUnits='userSpaceOnUse'
                            color-interpolation-filters='sRGB'
                        >
                            <feFlood
                                flood-opacity='0'
                                result='BackgroundImageFix'
                            />
                            <feColorMatrix
                                in='SourceAlpha'
                                type='matrix'
                                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                result='hardAlpha'
                            />
                            <feOffset dy='2' />
                            <feGaussianBlur stdDeviation='1.5' />
                            <feComposite in2='hardAlpha' operator='out' />
                            <feColorMatrix
                                type='matrix'
                                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                            />
                            <feBlend
                                mode='normal'
                                in2='BackgroundImageFix'
                                result='effect1_dropShadow_3477_3596'
                            />
                            <feBlend
                                mode='normal'
                                in='SourceGraphic'
                                in2='effect1_dropShadow_3477_3596'
                                result='shape'
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className='flex flex-col items-center gap-1 z-5'>
                <img
                    className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-lg   '
                    src={image}
                    alt={UserName}
                />

                <div className='h-[2px] w-40  md:w-[80%] mb-1 ml-4 border-dashed border-t-[2px]'></div>

                <div className='flex-1'>
                    <h2 className='text-1xl text-center md:text-4xl font-bold text-white mb-5'>
                        {UserName}
                    </h2>

                    <p className='text-sm md:text-2xl font-semibold text-white mb-5'>
                        {t("couponCard.coupon")} : {coupon}
                    </p>
                    <p className='text-sm md:text-2xl font-semibold text-white'>
                        {t("couponCard.price")} ${price}
                    </p>
                    <div className='mt-10 flex items-end justify-center'>
                        <button
                            onClick={handleRemoveCoupon}
                            className='text-1xl text-white hover:underline hover:text-gray-800 focus:outline-none'
                        >
                            {t("couponCard.remove")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminCoupon;
