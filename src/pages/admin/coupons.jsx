import AOS from "aos";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import "aos/dist/aos.css";

import AdminCoupon from "@/components/Cards/AdminCoupon";

import { db } from "@/Utils/firebase";
import Loading from "@/Utils/Loading";

const Coupons = () => {
    const { t } = useTranslation("cart", "footer", "common");
    const [Data, setData] = useState([]);
    const user = useSelector((state) => state.shopper.userInfo);

    const couponCards = [10, 25, 50, 100];
    const [selectedCoupon, setSelectedCoupon] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200,
        });
    }, []);

    const handleSelectCoupon = (couponValue) => {
        setSelectedCoupon(couponValue);
    };

    useEffect(() => {
        const collectionRef = collection(db, "coupons");

        try {
            setTimeout(async () => {
                const querySnapshot = await getDocs(collectionRef);

                const company = [];

                querySnapshot.forEach((doc) => {
                    const docData = doc.data();
                    if (user.displayName === docData.company) {
                        company.push(docData);
                    }
                });

                setData(company);
                setLoading(false);
            }, 3000);
        } catch (error) {
            console.error("Error fetching data from Firestore:", error);
            setLoading(false);
        }
    }, []);

    const handleRemoveCoupon = async (coupon) => {
        try {
            const docRef = doc(db, "coupons", coupon.coupon);
            await deleteDoc(docRef);

            setData((prevData) => prevData.filter((item) => item !== coupon));
        } catch (error) {
            console.error("Error removing document: ", error);
        }
    };

    return (
        <div>
            {" "}
            <div className='max-w-contentContainer bg-gray-100 '>
                <div className='w-full py-10'>
                    {loading ? (
                        <Loading />
                    ) : (
                        <div
                            className='text-xl gap-5 font-bold flex mt-5 flex-col mb-2 relative bg-white border rounded-2xl p-4 shadow-md md:w-[500px] lg:w-[700px] xl:w-[1300px] mx-auto '
                            data-aos='slide-right'
                        >
                            <h1
                                className='text-2xl font-bold text-black gap-5 text-left items-center flex justify-center  mb-5 mt-5'
                                data-aos='fade'
                            >
                                {user?.displayName} :{" "}
                                <span className='text-lightText font-normal gap-5'>
                                    ({Data.length} {t("cart.item")})
                                </span>
                            </h1>
                            <p className=' text-2xl'>Filter by price :</p>

                            <div className='flex gap-10 items-center flex-wrap justify-center border-b-4 border-dashed border-b-green-500 pb-10 mt-5'>
                                {couponCards.map((coupon, i) => (
                                    <button
                                        key={coupon + i}
                                        className={`px-2 py-2 w-[45%] md:w-[18%] h-20 text-2xl font-bold bg-white border-2  border-green-100 shadow-2xl rounded-sm ${
                                            selectedCoupon === coupon
                                                ? "ring-4 ring-[#20DC49]"
                                                : "ring-1 ring-gray-100"
                                        }`}
                                        onClick={() =>
                                            handleSelectCoupon(coupon)
                                        }
                                    >
                                        ${coupon}
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => setSelectedCoupon(null)}>
                                Reset
                            </button>

                            <Swiper
                                effect={"cards"}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className='mySwiper'
                            >
                                {Data.filter(
                                    (item) =>
                                        selectedCoupon === null ||
                                        selectedCoupon === item.price
                                ).map((item, index) => (
                                    <SwiperSlide key={item._id}>
                                        <div className=' '>
                                            <AdminCoupon
                                                image={item.image}
                                                UserName={item.company}
                                                price={item.price}
                                                _id={item._id}
                                                coupon={item.coupon}
                                                onRemove={() =>
                                                    handleRemoveCoupon(item)
                                                }
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Coupons;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "admin",
                "footer",
                "common",
                "cart",
            ])),
        },
    };
}
