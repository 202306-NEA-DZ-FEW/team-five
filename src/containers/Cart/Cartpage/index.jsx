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
import CheckoutCard from "@/components/Cards/CheckoutCard";

function CartPage() {
    const productData = useSelector((state) => state.shopper.productData);
    const dispatch = useDispatch();
    const [totalOldPrice, setTotalOldPrice] = useState(0);
    const [totalSavings, setTotalSavings] = useState(0);
    const [totalamt, setTotalAmt] = useState(0);
    const userInfo = useSelector((state) => state.shopper.userInfo);

    const cartCollectionRef = collection(db, "Cart");
    const addcart = async (e) => {
        await addDoc(cartCollectionRef, {
            name: productData,
            uid: auth?.currentUser?.uid,
        });
    };

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

    const handleCheckout = () => {
        addcart();
    };

    return (
        <div className='max-w-contentContainer bg-gray-100'>
            <div className='w-full py-10'>
                <div className='w-full flex '>
                    <div className='w-2/3 flex flex-col gap-5'>
                        <h1 className='text-2xl font-bold text-black'>
                            Cart{" "}
                            <span className='text-lightText font-normal'>
                                ({productData.length} items)
                            </span>
                        </h1>
                        <div>
                            <div className='text-xl  font-bold flex flex-col gap-2 mb-2 relative bg-white border rounded-[20px]  p-4 shadow-md md:w-[500px] lg:w-[600px] xl:w-[950px]'>
                                <p>All Coupons :</p>

                                <div>
                                    {productData.map((item) => (
                                        <>
                                            <div
                                                key={item._id}
                                                className='flex items-center justify-center  border-b-[1px] border-b-zinc-200 pb-4'
                                            >
                                                <CouponCard
                                                    quantity={item.quantity}
                                                    image={item.image}
                                                    UserName={item.UserName}
                                                    price={item.price}
                                                    _id={item._id}
                                                    ProductImg={item.ProductImg}
                                                    CouponAmount={
                                                        item.CouponAmount
                                                    }
                                                />
                                            </div>
                                        </>
                                    ))}
                                </div>

                                <button onClick={() => dispatch(resetCart())}>
                                    Reset Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-24 h-[500px]  flex flex-col justify-center'>
                        <CheckoutCard
                            totalOldPrice={totalOldPrice}
                            totalSavings={totalSavings}
                            totalamt={totalamt}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
