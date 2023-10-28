import { useTranslation } from "next-i18next";
import React from "react";
import { useSelector } from "react-redux";

import FormatePrice from "@/pages/auth/FormatePrice";

const CheckoutCard = ({ totalOldPrice, totalSavings, totalamt }) => {
    const productData = useSelector((state) => state.shopper.productData);

    const handleCheckout = () => {};
    const { t } = useTranslation("cart", "footer", "common");

    return (
        <div className='mr-10  relative border h-[700px] bg-white shadow-xl rounded-[20px] p-4 md:w-[300px] lg:w-[400px] xl:w-[500px]'>
            <div className='w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4'>
                <div className='text-xl bg-green-500 text-white font-bold flex items-center gap-2 p-2'>
                    <p>{t("cart.yourBag")}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='text-sm flex justify-between'>
                        <p className='font-semibold'>
                            {t("cart.total")}{" "}
                            <span>
                                ({productData.length}{" "}
                                {t("cart.item", { count: productData.length })})
                            </span>
                        </p>
                        <p className='line-through text-zinc-500 text-base'>
                            <FormatePrice amount={totalOldPrice} />
                        </p>
                    </div>
                    <div className='text-sm flex justify-between'>
                        <p className='font-semibold'>{t("cart.taxes")}</p>
                        <p className='text-[#2a8703] font-bold bg-green-100 py-1 px-2[2px] rounded-lg flex'>
                            <FormatePrice amount={totalSavings} />
                        </p>
                    </div>
                    <div className='text-sm flex justify-between'>
                        <p className='font-semibold'>{t("cart.totalAmount")}</p>
                        <p className='text-[#2a8703] font-bold text-base '>
                            <FormatePrice amount={totalamt} />
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pt-10 '>
                <div className='flex flex-col gap-1'>
                    <div className='absolute top-3/4 left-[-50px] bg-gray-100  w-3 h-3 md:w-[70px] md:h-[70px] xl:w-18 xl:h-18 rounded-full transform -translate-y-1/2'></div>
                    <div className='w-full flex items-center justify-center'>
                        <div className=' w-[400px] h-[1px] border-b-[2px] bg-green-500 mb-1 md:ml-4 md:border-dashed md:border-t-[2px] mt-80'></div>
                    </div>

                    <div className='absolute top-3/4 right-0 transform translate-x-1/2 bg-gray-100 w-3 h-3 md:w-[70px] md:h-[70px] xl:w-18 xl=h-18 rounded-full -translate-y-1/2'></div>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='font-bold text-lg'>{t("cart.totalPrice")}</p>
                    <p className='text-[#2a8703] font-bold text-lg'>
                        <FormatePrice amount={totalamt} />
                    </p>
                </div>
                <button
                    onClick={handleCheckout}
                    className='w-full text-white h-10 rounded-md font-semibold duration-300 bg-green-500 hover:bg-hoverBg'
                >
                    {t("cart.checkout")}
                </button>
            </div>
        </div>
    );
};

export default CheckoutCard;
