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
import Image from "next/image";

function CouponCard({
    image,
    UserName,
    price,
    id,
    ProductImg,
    CouponAmount,
    quantity,
}) {
    const productData = useSelector((state) => state.shopper.productData);
    const dispatch = useDispatch();
    const [totalOldPrice, setTotalOldPrice] = useState(0);
    const [totalSavings, setTotalSavings] = useState(0);
    const [totalamt, setTotalAmt] = useState(0);
    const userInfo = useSelector((state) => state.shopper.userInfo);

    useEffect(() => {
        let oldprice = 0;
        let savings = 0;
        let amt = 0;
        productData.map((item) => {
            oldprice += item.price * item.quantity;
            savings += item.price - item.price;
            amt += item.price * item.quantity;
            return;
        });
        setTotalOldPrice(oldprice);
        setTotalSavings(savings);
        setTotalAmt(amt);
    }, [productData]);

    return (
        <div className='relative bg-green-500 border rounded-[20px]  p-4 shadow-md md:w-[400px] lg:w-[600px] xl:w-[800px]'>
            <div className='flex flex-col md:flex-row items-center gap-4'>
                <img
                    className='w-32 h-32 rounded-lg ml-2 md:ml-9 mb-5'
                    src={image}
                    alt={UserName}
                />

                <div className='h-[2px] md:w-[2px] md:h-[140px] mb-1 md:ml-4 md:border-dashed md:border-l-[2px]'></div>

                <div className='flex-1'>
                    <h2 className='text-2xl md:text-4xl font-bold text-white'>
                        {UserName}
                    </h2>
                    <p className='text-xl md:text-2xl font-semibold text-white'>
                        Price: ${price}
                    </p>

                    <div className='mt-4'>
                        <button
                            onClick={() => dispatch(deleteItem({ _id: id }))}
                            className='text-xl text-white hover:underline hover:text-gray-800 focus:outline-none'
                        >
                            Remove
                        </button>
                        <div className='flex items-center pb-4'>
                            <button
                                onClick={() =>
                                    dispatch(
                                        plusQuantity({
                                            _id: id,
                                            UserName: UserName,
                                            image: ProductImg,
                                            price: CouponAmount,
                                            quantity: 1,
                                        })
                                    )
                                }
                                className='text-2xl md:text-4xl text-white'
                            >
                                +
                            </button>
                            <span className='mx-4 text-white text-xl md:text-2xl font-bold'>
                                {quantity}
                            </span>
                            <button
                                onClick={() =>
                                    dispatch(
                                        minusQuantity({
                                            _id: id,
                                            UserName: UserName,
                                            image: ProductImg,
                                            price: CouponAmount,
                                            quantity: 1,
                                        })
                                    )
                                }
                                className='text-2xl md:text-4xl text-white'
                            >
                                -
                            </button>
                            <div className='mt-4 flex justify-between items-center'>
                                <div className='flex gap-2 ml-[90px] mt-[-20px] xl:ml-[300px]  md:ml-[90px] sm:ml-[10px]  '>
                                    <p className='text-xl md:text-2xl text-white font-semibold'>
                                        Total :
                                    </p>
                                    <p className='text-xl md:text-2xl text-white font-semibold'>
                                        ${price * quantity}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute top-1/2 left-[-35px] bg-white w-10 h-10 md:w-[70px] md:h-[70px] xl:w-16 xl:h-16 rounded-full transform -translate-y-1/2'></div>
            <div className='absolute top-1/2 right-[-35px] bg-white w-10 h-10 md:w-[70px] md:h-[70px] xl:w-16 xl:h-16 rounded-full transform -translate-y-1/2'></div>
        </div>
    );
}

export default CouponCard;
