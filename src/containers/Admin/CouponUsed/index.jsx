import { useTranslation } from "next-i18next";
import { useState } from "react";

import Chart from "@/components/Admin/Chart";
import CouponCard from "@/components/Admin/CouponCard";

const getRandomData = () => {
    const randomData = Array.from({ length: 7 }, () =>
        Math.floor(Math.random() * 100)
    );
    return randomData;
};

const CouponUsed = () => {
    const { t } = useTranslation("admin");
    const [activeCardIndex, setActiveCardIndex] = useState(null);
    const handleCardClick = (chartIndex) => {
        const dataObjects = [data, data1, data2, data3];

        setSelectedChart(dataObjects[chartIndex]);
        setActiveCardIndex(chartIndex);
    };

    const data = {
        labels: [
            t("coupon.January"),
            t("coupon.February"),
            t("coupon.March"),
            t("coupon.April"),
            t("coupon.May"),
            t("coupon.June"),
            t("coupon.July"),
        ],
        datasets: [
            {
                label: t("coupon.Best"),
                data: [80, 59, 80, 81, 56, 30, 90],
                fill: false,
                borderColor: "#0AA2F0",
                tension: 0.3,
            },
            {
                label: t("coupon.urDonation"),
                data: getRandomData(),
                fill: false,
                borderColor: "red",
                tension: 0.3,
            },
        ],
    };

    const data1 = {
        labels: [
            t("coupon.January"),
            t("coupon.February"),
            t("coupon.March"),
            t("coupon.April"),
            t("coupon.May"),
            t("coupon.June"),
            t("coupon.July"),
        ],
        datasets: [
            {
                label: t("coupon.Best"),
                data: [80, 59, 80, 81, 56, 30, 90],
                fill: false,
                borderColor: "#0AA2F0",
                tension: 0.3,
            },
            {
                label: t("coupon.urDonation"),
                data: getRandomData(),
                fill: false,
                borderColor: "red",
                tension: 0.3,
            },
        ],
    };

    const data2 = {
        labels: [
            t("coupon.January"),
            t("coupon.February"),
            t("coupon.March"),
            t("coupon.April"),
            t("coupon.May"),
            t("coupon.June"),
            t("coupon.July"),
        ],
        datasets: [
            {
                label: t("coupon.Best"),
                data: [80, 59, 80, 81, 56, 30, 90],
                fill: false,
                borderColor: "#0AA2F0",
                tension: 0.3,
            },
            {
                label: t("coupon.urDonation"),
                data: getRandomData(),
                fill: false,
                borderColor: "red",
                tension: 0.3,
            },
        ],
    };

    const data3 = {
        labels: [
            t("coupon.January"),
            t("coupon.February"),
            t("coupon.March"),
            t("coupon.April"),
            t("coupon.May"),
            t("coupon.June"),
            t("coupon.July"),
        ],
        datasets: [
            {
                label: t("coupon.Best"),
                data: [80, 59, 80, 81, 56, 30, 90],
                fill: false,
                borderColor: "#0AA2F0",
                tension: 0.3,
            },
            {
                label: t("coupon.urDonation"),
                data: getRandomData(),
                fill: false,
                borderColor: "red",
                tension: 0.3,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const [selectedChart, setSelectedChart] = useState(data);

    return (
        <div className='flex flex-col items-center m-5'>
            <h1 className='text-center font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl mb-6'>
                {t("coupon.Used")}
            </h1>
            <div className='flex justify-center gap-10 mb-5'>
                <CouponCard
                    onClick={() => handleCardClick(0)}
                    number='42'
                    title={t("coupon.Daily")}
                    active={activeCardIndex === 0}
                />
                <CouponCard
                    onClick={() => handleCardClick(1)}
                    number='674'
                    title={t("coupon.Monthly")}
                    active={activeCardIndex === 1}
                />
                <CouponCard
                    onClick={() => handleCardClick(2)}
                    number='8994'
                    title={t("coupon.Yearly")}
                    active={activeCardIndex === 2}
                />
                <CouponCard
                    onClick={() => handleCardClick(3)}
                    number='238.994'
                    title={t("coupon.Total")}
                    active={activeCardIndex === 3}
                />
            </div>
            {selectedChart !== null && (
                <Chart data={selectedChart} type='line' options={options} />
            )}
        </div>
    );
};

export default CouponUsed;
