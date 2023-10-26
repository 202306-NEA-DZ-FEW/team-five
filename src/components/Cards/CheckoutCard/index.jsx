import FormatePrice from "@/pages/auth/FormatePrice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteItem,
    minusQuantity,
    plusQuantity,
    resetCart,
} from "@/redux/shopperSlice";
import Link from "next/link";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/Utils/firebase";
import Image from "next/image";
import CouponCard from "@/components/Cards/CouponCard";

const CheckoutCard = ({ totalOldPrice, totalSavings, totalamt }) => {
    const productData = useSelector((state) => state.shopper.productData);
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.shopper.userInfo);

    const handleCheckout = () => {};

    return (
        <div className='relative border h-[700px] bg-white shadow-xl rounded-[20px] p-4  md:w-[300px] lg:w-[400px] xl:w-[500px]'>
            <div className='w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4'>
                <div className='text-xl bg-green-500 text-white font-bold  flex items-center gap-2 p-2'>
                    <p>Your Bag :</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='text-sm flex justify-between'>
                        <p className='font-semibold'>
                            Total : <span>({productData.length} items)</span>
                        </p>
                        <p className='line-through text-zinc-500 text-base'>
                            <FormatePrice amount={totalOldPrice} />
                        </p>
                    </div>
                    <div className='text-sm flex justify-between'>
                        <p className='font-semibold'>Taxes : </p>
                        <p className='text-[#2a8703] font-bold bg-green-100 py-1 px-2[2px] rounded-lg flex'>
                            <FormatePrice amount={totalSavings} />
                        </p>
                    </div>
                    <div className='text-sm flex justify-between'>
                        <p className='font-semibold'>Total Amount :</p>
                        <p className='text-[#2a8703] font-bold text-base '>
                            <FormatePrice amount={totalamt} />
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pt-10 '>
                <div className='flex flex-col gap-1'>
                    <div className='absolute top-3/4 left-[-50px] bg-gray-100  w-3 h-3 md:w-[70px] md:h-[70px] xl:w-16 xl:h-16 rounded-full transform -translate-y-1/2'></div>
                    <div className='w-full flex items-center justify-center'>
                        <div className='w-[400px] h-[1px] border-b-[2px] bg-green-500 mb-1 md:ml-4 md:border-dashed md:border-t-[2px] mt-40'></div>
                    </div>
                    <div className='absolute top-3/4 right-[-50px] bg-gray-100  w-3 h-3 md:w-[70px] md:h-[70px] xl:w-16 xl:h-16 rounded-full transform -translate-y-1/2'></div>
                </div>
                <div className=' flex items-center justify-between'>
                    <p className='font-bold text-lg'>Total Price :</p>
                    <p className='text-[#2a8703] font-bold text-lg'>
                        <FormatePrice amount={totalamt} />
                    </p>
                </div>
                {userInfo ? (
                    <button
                        onClick={handleCheckout}
                        className='w-full text-white h-10 rounded-md font-semibold duration-300 bg-green-500 hover:bg-hoverBg'
                    >
                        Checkout{" "}
                    </button>
                ) : (
                    <Link
                        className='text-sm text-center text-red-500 mt-4 font-semibold'
                        href='/auth'
                    >
                        <button>Please Sign In for Checkout</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default CheckoutCard;
