import React, { useEffect, useState } from "react";

const Loading = () => {
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setShowLoading(true);
        }, 1000);

        return () => clearTimeout(delay);
    }, []);

    return (
        <div className='flex items-center justify-center'>
            {showLoading && <img src='coupon.gif' alt='Loading...' />}
        </div>
    );
};

export default Loading;
