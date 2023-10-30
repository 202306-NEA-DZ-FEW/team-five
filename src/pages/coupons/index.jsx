import { collection, getDocs } from "firebase/firestore";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";

import Coupons from "@/components/CouponsCard/Coupons";
import CouponsBanner from "@/components/CouponsCard/CouponsBanner";

import { db } from "@/Utils/firebase";

export default function CouponsPage() {
    const [Data, setData] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, "users");

        try {
            (async () => {
                const querySnapshot = await getDocs(collectionRef);

                const items = [];

                querySnapshot.forEach((doc) => {
                    const docData = doc.data();
                    items.push(docData);
                });

                setData(items);
            })();
        } catch (error) {
            console.error("Error fetching data from Firestore:", error);
        }
    }, []);

    return (
        <div>
            <CouponsBanner />
            <Coupons companies={Data} />
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "footer"])),
        },
    };
}
