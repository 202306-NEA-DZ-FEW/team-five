import React from "react";
import { BsBalloonHeart } from "react-icons/bs";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { RiUserHeartLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";

import ImpactCard from "./ImpactCard";
const CouponsBanner = () => {
    return (
        <section className='flex  flex-col xl:flex-row  items-center h-screen gap-10 w-full'>
            <div
                className='flex-1 bg-center bg-cover w-full h-full p-4'
                style={{
                    backgroundImage: "url(/couponsBanner.svg)",
                    backgroundSize: "100% auto",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
            <div className='flex-1 px-4 lg:px-10 mb-8 lg:mb-0'>
                <div className='w-full'>
                    <h1 className='lg:text-7xl md:text-5xl text-4xl font-bold text-[#1A8FE3]'>
                        Let`s make an <span className='underline'>impact</span>
                    </h1>
                    <p className='mt-6 mb-12 text-gray-600 font-semibold '>
                        Togather we can fight poverty and stop the hunger around
                        us. Your donation is the shield to protect the poor from
                        suffering.
                    </p>
                </div>
                <div className='mt-10 grid grid-cols-2 gap-10'>
                    <ImpactCard
                        title='Your help'
                        icon={<BsBalloonHeart />}
                        description='Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Praesentium, itaque.'
                    />
                    <ImpactCard
                        title='Right place'
                        icon={<SlLocationPin />}
                        description='Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Praesentium, itaque.'
                    />
                    <ImpactCard
                        title='Your Donation'
                        icon={<LiaHandHoldingHeartSolid />}
                        description='Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Praesentium, itaque.'
                    />
                    <ImpactCard
                        title='Our valunteers'
                        icon={<RiUserHeartLine />}
                        description='Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Praesentium, itaque.'
                    />
                </div>
            </div>
        </section>
    );
};

export default CouponsBanner;
