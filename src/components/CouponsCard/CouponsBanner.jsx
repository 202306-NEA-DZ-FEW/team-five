import Image from "next/image";
import bannerImage from "public/couponBanner.svg";
import React from "react";

const CouponsBanner = () => {
    return (
        <section>
            <div>
                <Image
                    className=''
                    alt='banner image'
                    src={bannerImage}
                    width={500}
                    height={500}
                />
            </div>
            <div>
                <h1>description</h1>
            </div>
        </section>
    );
};

export default CouponsBanner;
