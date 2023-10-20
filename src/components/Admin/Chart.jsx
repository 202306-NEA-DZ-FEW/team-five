import { useEffect, useRef } from "react";
import ChartJS from "chart.js/auto";

const Chart = ({ data, type, options }) => {
    const chartRef = useRef();
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new ChartJS(ctx, {
            type: type,
            data: data,
            options: options,
        });
    }, [data, type, options]);

    return <canvas ref={chartRef}></canvas>;
};

export default Chart;
