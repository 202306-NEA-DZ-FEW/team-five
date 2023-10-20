import CouponUsed from "@/containers/Admin/CouponUsed";

const Admin = () => {
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