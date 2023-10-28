import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import CartPage from "@/containers/Cart/Cartpage";

const Cart = () => {
    const { t } = useTranslation("cart", "footer", "common");

    return (
        <div Classname='overflow-x-hidden'>
            <CartPage />
        </div>
    );
};

export default Cart;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "cart",
                "footer",
                "common",
            ])),
        },
    };
}
