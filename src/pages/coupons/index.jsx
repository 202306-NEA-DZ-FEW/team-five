import { collection, getDocs } from "firebase/firestore";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";

import Coupons from "@/components/CouponsCard/Coupons";
import CouponsBanner from "@/components/CouponsCard/CouponsBanner";

import { db } from "@/Utils/firebase";
import Loading from "@/Utils/Loading";

export default function CouponsPage() {
    const { t } = useTranslation("couponsPage,common,footer,navbar");
    const [loading, setLoading] = useState(true);
    const [Data, setData] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, "users");

        try {
            setTimeout(async () => {
                const querySnapshot = await getDocs(collectionRef);

                const items = [];

                querySnapshot.forEach((doc) => {
                    const docData = doc.data();
                    items.push(docData);
                });

                setData(items);
                setLoading(false);
            }, 3000);
        } catch (error) {
            console.error("Error fetching data from Firestore:", error);
            setLoading(false);
        }
    }, []);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <CouponsBanner />
                    <Coupons companies={Data} />
                </>
            )}
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "footer",
                "couponsPage",
                "navbar",
            ])),
        },
    };
}
