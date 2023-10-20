import Chart from "@/components/Admin/Chart";

const getRandomData = () => {
    const randomData = Array.from({ length: 7 }, () =>
        Math.floor(Math.random() * 100)
    );
    return randomData;
};

const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Best Doner",
            data: [80, 59, 80, 81, 56, 30, 90],
            fill: false,
            borderColor: "#0AA2F0",
            tension: 0.3,
        },
        {
            label: "Your Donation",
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

const CouponUsed = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl mb-3'>
                Used Coupons
            </h1>
            <Chart data={data} type='line' options={options} />
        </div>
    );
};

export default CouponUsed;
