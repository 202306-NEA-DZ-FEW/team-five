"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import PricingCard from "@/components/PricingCard/index";

const Checkout = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetchPrices();
    }, []);

    const fetchPrices = async () => {
        const { data } = await axios.get("/api/getproducts");
        setPrices(data);
    };

    return (
        <section>
            <div>checkout</div>
            <div className='products grid grid-cols-1 sm:grid-cols-2 gap-8 items-center'>
                {prices &&
                    prices.map((price) => (
                        <PricingCard price={price} key={price.id} />
                    ))}
            </div>
        </section>
    );
};

export default Checkout;
