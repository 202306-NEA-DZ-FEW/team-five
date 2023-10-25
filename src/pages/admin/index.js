import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import EditOrganization from "@/components/Admin/EditOrganization";

import CouponUsed from "@/containers/Admin/CouponUsed";
import EditCoupons from "@/containers/Admin/EditCoupons";

const Admin = () => {
    const { t } = useTranslation("admin", "footer", "common");
    return (
        <div className='grid grid-cols-1fr grid-rows-1fr grid-flow-row grid-areas-3 sm:grid-cols-1fr md:grid-cols-1fr lg:grid-cols-1fr xl:grid-cols-1/3'>
            <div className='UsedCoupons ml-2 md:ml-20 mr-2 md:mr-20'>
                <CouponUsed />
            </div>
            <div className='grid grid-cols-1fr grid-rows-1fr grid-flow-row grid-areas-3 sm:grid-cols-1fr md:grid-cols-1fr lg:grid-cols-1fr xl:grid-cols-1/3'>
                <EditCoupons />
            </div>
            <p className='mb-10 font-bold text-[150%]'></p>
            <p className='mb-10 text-[100%] text-gray-500 border bg-gray-100 p-5'>
                <div className='text-center font-bold text-xl '>
                    {t("edit.editorgdetails")}
                </div>
            </p>
            <div className='grid grid-cols-1fr grid-rows-1fr grid-flow-row grid-areas-3 sm:grid-cols-1fr md:grid-cols-1fr lg:grid-cols-1fr xl:grid-cols-1/3 '>
                <div className='flex justify-center items-center h-full'>
                    <EditOrganization />
                </div>
            </div>
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
