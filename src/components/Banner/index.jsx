import AOS from "aos";
import Link from "next/link";
import React, { useEffect } from "react";

import "aos/dist/aos.css";

const Banner = ({ description, title, title1, imageUrl, btnText, title2 }) => {
    const imgStyle = {
        backgroundImage: "url(" + imageUrl + ")",
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 230,
        });
    }, []);
    return (
        <section>
            <div
                className='bg-cover bg-center h-[30vh] sm:h-[50vh] md:h-[70vh] text-white  object-fill'
                style={imgStyle}
            >
                <div className='bg-opacity-50 bg-black h-full items-center flex justify-center flex-col'>
                    <div className='text-center'>
                        <h1 className='text-xl sm:text-3xl md:text-5xl font-bold text-[#20DC49]'>
                            {title}
                            <span className='text-white'>{title1}</span>
                            <br />
                            {title2}
                        </h1>
                        <p className='mt-6 sm:mt-8 md:mt-10 text-center text-[9px] sm:text-xs md:text-xl '>
                            {description}
                        </p>
                    </div>
                    <div className='mt-6 sm:mt-8 md:mt-10'>
                        <Link href='/coupons'>
                            <button className='bg-[#20DC49] rounded-full p-2 px-6 text-[9px] sm:text-base sm:px-6 text-start cursor-pointer font-medium hover:bg-green-600'>
                                {btnText}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
