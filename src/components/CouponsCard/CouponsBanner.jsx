import Image from "next/image";
import couponsBanner from "public/couponsBanner.svg";
import React from "react";
const CouponsBanner = () => {
    return (
        <section className='flex  flex-col md:flex-row  h-[70vh]  w-full'>
            <div className='flex-1 flex justify-center items-center'>
                <figure className='md:scale-125'>
                    <Image
                        className=''
                        alt=''
                        src={couponsBanner}
                        width={700}
                        height={700}
                    />
                </figure>
            </div>
            <div className='flex-1 text-center'>
                <div>
                    <h1>Let`s make an impact</h1>
                    <p>
                        Togather we can fight poverty and stop the hunger around
                        us.
                    </p>
                </div>
                <div>
                    <div>Your help</div>
                    <div>Right place</div>
                    <div>Your Donation</div>
                    <div>Our valunteers</div>
                </div>
            </div>
        </section>
    );
};

export default CouponsBanner;
