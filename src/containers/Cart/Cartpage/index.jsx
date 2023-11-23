import AOS from "aos";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "aos/dist/aos.css";

import CheckoutCard from "@/components/Cards/CheckoutCard";
import CouponCard from "@/components/Cards/CouponCard";

import { resetCart } from "@/redux/shopperSlice";
import Loading from "@/Utils/Loading";

function CartPage() {
    const { t } = useTranslation("cart", "footer", "common");
    const productData = useSelector((state) => state.shopper.productData);
    const dispatch = useDispatch();
    const [totalOldPrice, setTotalOldPrice] = useState(0);
    const [totalSavings, setTotalSavings] = useState(0);
    const [totalamt, setTotalAmt] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200,
        });
    }, []);

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

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [productData]);

    return (
        <div className='max-w-contentContainer bg-gray-100'>
            <div className='w-full py-10'>
                <div className='w-full flex flex-col gap-5 items-center md:flex-row'>
                    <div className='ml-10 w-2/3 flex flex-col gap-5 flex-wrap items-center'>
                        <h1
                            className='text-2xl font-bold text-black gap-5 text-left items-start'
                            data-aos='fade'
                        >
                            {t("cart.title")}{" "}
                            <span className='text-lightText font-normal gap-5'>
                                ({productData.length} {t("cart.item")})
                            </span>
                        </h1>
                        {loading ? (
                            <Loading />
                        ) : (
                            <div
                                className='text-xl gap-5 font-bold flex flex-col mb-2 relative bg-white border rounded-2xl p-4 shadow-md md:w-[500px] lg:w-[700px] xl:w-[900px] mx-auto'
                                data-aos='slide-right'
                            >
                                <p>{t("cart.items")}</p>
                                <div
                                    className='cart-items-container'
                                    style={{
                                        maxHeight: "650px",
                                        overflowY: "auto",
                                        overflowX: "hidden",
                                    }}
                                >
                                    {productData.map((item, index) => (
                                        <div
                                            key={item._id}
                                            className='flex items-center justify-center border-b border-zinc-200 pb-4'
                                        >
                                            <CouponCard
                                                quantity={item.quantity}
                                                image={item.image}
                                                UserName={item.UserName}
                                                price={item.price}
                                                _id={item._id}
                                                ProductImg={item.ProductImg}
                                                CouponAmount={item.CouponAmount}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className='bg-red-100 text-sm font-medium text-red-600 text-center px-2 rounded-md self-start'
                                    onClick={() => dispatch(resetCart())}
                                >
                                    {t("cart.reset")}
                                </button>
                            </div>
                        )}
                    </div>

                    <div
                        className='mt-10 h-500 flex flex-col justify-center md:flex-row'
                        data-aos='fade-up'
                    >
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
