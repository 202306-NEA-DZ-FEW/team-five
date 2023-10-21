import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import CouponUsed from "@/containers/Admin/CouponUsed";

const Admin = () => {
    const { t } = useTranslation("admin", "footer", "common");
    return (
        <div className='grid grid-cols-1fr grid-rows-1fr grid-flow-row grid-areas-3 sm:grid-cols-1fr md:grid-cols-1fr lg:grid-cols-1fr xl:grid-cols-1/3'>
            <div className='UsedCoupons ml-2 md:ml-20 mr-2 md:mr-20'>
                <CouponUsed />
            </div>
            <div className='Edit-coupons bg-gray-300'></div>
            <div className='userinfo bg-gray-300'></div>
        </div>
    );
};

export default Admin;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "admin",
                "footer",
                "common",
            ])),
        },
    };
}
