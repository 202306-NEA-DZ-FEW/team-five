import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Coupons from "@/components/CouponsCard/Coupons";
import CouponsBanner from "@/components/CouponsCard/CouponsBanner";

const index = () => {
    return (
        <div>
            <CouponsBanner />
            <Coupons />
        </div>
    );
};

export default index;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "footer"])),
        },
    };
}
