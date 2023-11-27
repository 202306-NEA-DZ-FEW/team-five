import { useTranslation } from "next-i18next";
import React, { useState } from "react";

import ChangeLogo from "@/components/Admin/ChangeLogo";
import CouponCard from "@/components/Admin/CouponCard";

const EditCoupons = () => {
    const [activeCardIndex, setActiveCardIndex] = useState(null);
    const [newCouponAmount, setNewCouponAmount] = useState("");
    const { t } = useTranslation("admin");

    const handleCardClick = (cardIndex, amount) => {
        setActiveCardIndex(cardIndex);
        setNewCouponAmount(amount);
    };

    return (
        <div>
            <div className='items-center text-center font-bold text-[35px]'>
                {t("edit.editcoupons")}
            </div>
            <p className='items-center text-center font-semibold text-[25px] mt-3'>
                {t("edit.defaultcouponamounts")}
            </p>
            <div className='flex justify-center gap-10 mb-10 mt-10'>
                <CouponCard
                    onClick={() => handleCardClick(0, "10")}
                    number='10₺'
                    active={activeCardIndex === 0}
                />
                <CouponCard
                    onClick={() => handleCardClick(1, "25")}
                    number='25₺'
                    active={activeCardIndex === 1}
                />
                <CouponCard
                    onClick={() => handleCardClick(2, "50")}
                    number='50₺'
                    active={activeCardIndex === 2}
                />
                <CouponCard
                    onClick={() => handleCardClick(3, "100")}
                    number='100₺'
                    active={activeCardIndex === 3}
                />
            </div>
            <p className='items-center text-center font-bold text-[30px] mt-3'>
                {t("edit.uploadlogo")}
            </p>
            <div>
                <ChangeLogo CouponAmount={newCouponAmount} />
            </div>
        </div>
    );
};

export default EditCoupons;
