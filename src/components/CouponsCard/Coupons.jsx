import React, { useState, useEffect, useRef } from "react";
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
            <div className='bg-white p-6 m-10 rounded-lg drop-shadow-2xl w-4/5'>
                {/* List of restaurants */}
                <div className='restaurants space-y-4'>
                    {companies.map((r, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-between p-4 rounded-md bg-white shadow-md ${
                                selectedRestaurants.includes(r)
                                    ? "bg-green-200"
                                    : "bg-gray-100"
                            }`}
                        >
                            <h3 className='text-lg font-semibold'>
                                {r.UserName}
                            </h3>
                            <button
                                className={`p-2 rounded-md bg-gray-400 ${
                                    selectedRestaurants.includes(r)
                                        ? "bg-green-500"
                                        : ""
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

                {/* Coupon selection section */}
                <div className='coupons mt-4 space-y-4'>
                    <div>
                        <h1 className='text-lg font-semibold'>
                            Coupon Amount:
                        </h1>
                    </div>
                    <div className='flex space-x-4'>
                        {/* Buttons for predefined coupon amounts */}
                        <button
                            className={`p-2 rounded-md bg-gray-400 ${
                                selectedCoupon === 10 ? "bg-green-500" : ""
                            }`}
                            onClick={() => handleSelectCoupon(10)}
                        >
                            $10
                        </button>
                        <button
                            className={`p-2 rounded-md bg-gray-400 ${
                                selectedCoupon === 25 ? "bg-green-500" : ""
                            }`}
                            onClick={() => handleSelectCoupon(25)}
                        >
                            $25
                        </button>
                        <button
                            className={`p-2 rounded-md bg-gray-400 ${
                                selectedCoupon === 50 ? "bg-green-500" : ""
                            }`}
                            onClick={() => handleSelectCoupon(50)}
                        >
                            $50
                        </button>
                        <button
                            className={`p-2 rounded-md bg-gray-400 ${
                                selectedCoupon === 100 ? "bg-green-500" : ""
                            }`}
                            onClick={() => handleSelectCoupon(100)}
                        >
                            $100
                        </button>
                    </div>

                    {/* Custom coupon amount input */}
                    <div>
                        <h1 className='text-lg font-semibold'>
                            Custom Amount:
                        </h1>
                        <input
                            type='number'
                            name='custom amount'
                            placeholder='amount'
                            className='w-20 p-2 rounded-md bg-white shadow-md'
                            value={customCouponAmount}
                            onChange={handleCustomCouponAmountChange}
                        />
                    </div>
                </div>

                {/* "Add to Cart" button */}
                <div className='add-to-cart mt-4'>
                    <button
                        type='submit'
                        className='p-2 bg-red-500 text-white rounded-md'
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Coupons;
