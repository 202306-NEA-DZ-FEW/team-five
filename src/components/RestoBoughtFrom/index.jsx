import { useTranslation } from "next-i18next";
import React from "react";

const BoughtFrom = (props) => {
    const { selectedRestaurants } = props;
    const { t } = useTranslation("payment");
    if (selectedRestaurants.length === 0) {
        return null;
    }
    return (
        <div className='restaurant-section lg:flex lg:flex-row flex flex-col items-center'>
            <h2 className='text-2xl font-semibold mb-4'>
                {t("payment.title")}
            </h2>
            <ul className='retaurant-list list-none p-0 flex flex-wrap gap-10'>
                {selectedRestaurants.map((restaurant, index) => (
                    <li key={index} className='retaurant-item lg:w-1/3 w-full'>
                        {restaurant}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BoughtFrom;
