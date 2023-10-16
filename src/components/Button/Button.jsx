import React from "react";
import Link from "next/link";

function Button() {
    return (
        <Link href='/coupons'>
            <button class='py-2 px-4 bg-green-500 text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 rounded-full'>
                Donate Now
            </button>
        </Link>
    );
}

export default Button;
