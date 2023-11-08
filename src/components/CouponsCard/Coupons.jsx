import AOS from "aos";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

import { addToCart } from "@/redux/shopperSlice";

const Coupons = ({ companies }) => {
    // Define state variables using the useState hook
    const { t } = useTranslation("couponsPage");
    const [selectedRestaurants, setSelectedRestaurants] = useState([]);
    const [selectedCoupon, setSelectedCoupon] = useState(null);
    const [customCouponAmount, setCustomCouponAmount] = useState(0);
    const couponCards = [10, 25, 50, 100];

    const dispatch = useDispatch();

    const [restaurants, setRestaurants] = useState(companies);
    // Function to toggle the selection of a restaurant
    const handleToggleSelectRestaurant = (restaurant) => {
        // If the restaurant is already selected, remove it from the selection; otherwise, add it.
        if (selectedRestaurants.includes(restaurant)) {
            setSelectedRestaurants(
                selectedRestaurants.filter((r) => r !== restaurant)
            );
        } else {
            setSelectedRestaurants([...selectedRestaurants, restaurant]);
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
        });
    }, []);

    // Function to handle the selection of predefined coupon amounts
    const handleSelectCoupon = (couponValue) => {
        setSelectedCoupon(couponValue);
        setCustomCouponAmount(0);
    };

    // Function to handle changes in the custom coupon amount input
    const handleCustomCouponAmountChange = (e) => {
        // Ensure the custom amount is a non-negative integer
        const amount = Math.max(0, parseInt(e.target.value));
        setCustomCouponAmount(amount);
        setSelectedCoupon(null);
    };

    // Function to add selected restaurants and coupon amounts to the cart
    const handleAddToCart = (e) => {
        e.preventDefault();
        if (selectedRestaurants.length > 0) {
            let couponAmount = selectedCoupon;
            if (couponAmount === null) {
                couponAmount = customCouponAmount;
            }

            if (isNaN(couponAmount)) {
                // Show an alert if the amount is not a valid number
                toast.error(`${t("alert.alert1")}`);
            } else if (couponAmount === 0) {
                // Show an alert if the amount is 0
                toast.error(`${t("alert.alert2")}`);
            } else if (couponAmount < 5) {
                // Show an alert if the amount is less than $5
                toast.error(`${t("alert.alert3")}`);
            } else {
                // Prepare data for the backend and log it
                const restaurantsWithCoupon = selectedRestaurants.map(
                    (restaurant) => ({
                        ...restaurant,
                        coupon: couponAmount,
                    })
                );
                restaurantsWithCoupon.forEach((restaurant) => {
                    dispatch(
                        addToCart({
                            id: restaurant.id,
                            UserName: restaurant.UserName,
                            image: restaurant.ProductImg,
                            price: restaurant.coupon,
                            quantity: 1,
                        })
                    );
                });
                toast.success("Item(s) added to the cart");
                // Reset state variables
                setSelectedRestaurants([]);
                setSelectedCoupon(null);
                setCustomCouponAmount(0);
            }
        }
    };

    // Render the component
    return (
        <div className='flex flex-col justify-center items-center'>
            {/* Header section */}
            <ToastContainer />

            <div className='xl:-mt-14'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='374'
                    viewBox='0 0 1725 274'
                    class='w-full h-full'
                >
                    <path
                        d='M0 0H1725V250.022C1069.04 282.526 690.799 281.455 0 250.022V0Z'
                        fill='#43AFD6'
                    />
                    <text
                        x='50%'
                        y='50%'
                        dominant-baseline='middle'
                        text-anchor='middle'
                        fill='white'
                        class='text-5xl font-semibold'
                    >
                        {t("cards.title")}
                    </text>
                </svg>
            </div>

            {/* Main content section */}
            <div className='bg-white p-10 m-10 flex flex-col gap-16 rounded-lg border border-gray-100 shadow-2xl lg:max-w-7xl'>
                {/* List of restaurants */}
                <div className='flex flex-row flex-wrap gap-24 justify-center 2xl:justify-start w-[570] h-[417]'>
                    {companies?.map((r, index) => (
                        <div
                            key={index}
                            data-aos='flip-left'
                            className={`flex flex-col items-center justify-center p-4  bg-white shadow-md gap-2 border border-gray-100 transition-transform transform-gpu hover:scale-105 hover:filter-grayscale hover:bg-gray-100  ${
                                selectedRestaurants.includes(r)
                                    ? "bg-green-200"
                                    : "bg-gray-100"
                            }`}
                        >
                            <img
                                className=''
                                alt={r.UserName}
                                src={r.ProductImg}
                                width={300}
                                height={200}
                            />
                            <h3 className='font-semibold text-3xl my-5'>
                                {r.UserName}
                            </h3>
                            <button
                                className={`p-2  rounded-xl text-white  font-semibold text-2xl  w-4/5 py-2 mb-5 text-center ${
                                    selectedRestaurants.includes(r)
                                        ? "bg-gray-800"
                                        : "bg-green-500"
                                }`}
                                onClick={() => handleToggleSelectRestaurant(r)}
                                data-aos='zoom-in'
                            >
                                {selectedRestaurants.includes(r)
                                    ? `${t("cards.selected")}`
                                    : `${t("cards.select")}`}
                            </button>
                        </div>
                    ))}
                </div>
                {/* Coupon selection section */}

                {/* Buttons for predefined coupon amounts */}
                <div className='flex gap-10 items-center flex-wrap justify-center border-t-4 border-dashed border-t-green-500 pt-14'>
                    {couponCards.map((coupon, i) => (
                        <button
                            key={coupon + i}
                            className={`px-2 py-2 w-[45%] md:w-[18%] h-20 text-2xl font-bold bg-white border-2  border-green-100 shadow-2xl rounded-sm ${
                                selectedCoupon === coupon
                                    ? "ring-4 ring-[#20DC49]"
                                    : "ring-1 ring-gray-100"
                            }`}
                            onClick={() => handleSelectCoupon(coupon)}
                        >
                            ${coupon}
                        </button>
                    ))}
                </div>
                {/* Custom coupon amount input */}

                <div
                    className='relative w-full rounded-md border-[#20DC49] border-2  border-opacity-50'
                    data-aos='fade-left'
                >
                    <input
                        type='number'
                        name='custom amount'
                        placeholder={t("cards.placeholder")}
                        className='h-[40px] p-8 w-full text-[#20DC49] font-bold text-4xl placeholder-[#20DC49] rounded-md bg-white shadow-md'
                        value={customCouponAmount}
                        onChange={handleCustomCouponAmountChange}
                    />
                    <span className='h-[65px] justify-center flex items-center bg-[#20DC49] bg-opacity-10 text-gray-500 absolute right-0 bottom-0 w-48 font-bold text-5xl'>
                        $
                    </span>
                </div>
                {/* "Add to Cart" button */}
                <button
                    type='submit'
                    className='p-4 py-3 text-4xl font-bold w-full bg-[#20DC49] text-white rounded-2xl mb-28'
                    onClick={handleAddToCart}
                    data-aos='fade-up'
                >
                    {t("cards.addTocart")} 🛒
                </button>
            </div>
        </div>
    );
};

export default Coupons;
