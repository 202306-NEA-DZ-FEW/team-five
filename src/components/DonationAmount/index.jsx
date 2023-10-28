import { useTranslation } from "next-i18next";
import React from "react";

const DonationAmount = ({ selectedAmount }) => {
    const { t } = useTranslation("payment");
    return (
        <div className='container mx-auto py-8'>
            <h2 className='text-2xl font-semibold mb-4'>
                {t("payment.donoAmount")}
            </h2>
            <p>
                {selectedAmount
                    ? `${selectedAmount}₺`
                    : "Please select an amount"}
            </p>
        </div>
    );
};

export default DonationAmount;
