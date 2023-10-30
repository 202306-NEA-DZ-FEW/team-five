import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "@/redux/shopperSlice";

const Coupons = ({ companies }) => {
    // Define state variables using the useState hook

    const [selectedRestaurants, setSelectedRestaurants] = useState([]);
    const [selectedCoupon, setSelectedCoupon] = useState(null);
    const [customCouponAmount, setCustomCouponAmount] = useState(0);

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
                alert(
                    "You need to choose a valid amount of money you want to donate."
                );
            } else if (couponAmount === 0) {
                // Show an alert if the amount is 0
                alert(
                    "You need to choose the amount of money you want to donate."
                );
            } else if (couponAmount < 5) {
                // Show an alert if the amount is less than $5
                alert("Please, the donation needs to be $5 or more.");
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
            <div className='bg-sky-400 w-full h-28 rounded-b-full'>
                <h1 className='text-4xl text-white font-semibold mb-4 text-center m-3'>
                    Restaurants
                </h1>
            </div>

            {/* Main content section */}
            <div className='bg-white p-10 m-10 flex flex-col gap-16 rounded-lg border border-gray-100 shadow-2xl lg:max-w-7xl'>
                {/* List of restaurants */}
                <div className='flex flex-row flex-wrap gap-24 justify-center 2xl:justify-start w-[570] h-[417]'>
                    {companies?.map((r, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center p-4  bg-white shadow-md gap-2 border border-gray-100 ${
                                selectedRestaurants.includes(r)
                                    ? "bg-green-200"
                                    : "bg-gray-100"
                            }`}
                        >
                            <Image
                                className=''
                                alt={r.UserName}
                                src={r.image}
                                width={300}
                                height={200}
                            />
                            <h3 className='font-semibold text-3xl my-5'>
                                {r.UserName}
                            </h3>
                            <button
                                className={`p-2 rounded-xl text-white font-semibold text-2xl  w-4/5 py-2 mb-5 text-center ${
                                    selectedRestaurants.includes(r)
                                        ? "bg-gray-800"
                                        : "bg-green-500"
                                }`}
                                onClick={() => handleToggleSelectRestaurant(r)}
                            >
                                {selectedRestaurants.includes(r)
                                    ? "Selected"
                                    : "Select"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Coupons;
