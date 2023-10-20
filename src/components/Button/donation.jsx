import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Link from "next/link";

export default function Donation() {
    const { t } = useTranslation("button");
    return (
        <div>
            <Link href='/coupons'>
                <button class='py-2 px-4 bg-green-500 text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 rounded-full'>
                    <p>{t("donation")}</p>
                </button>
            </Link>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <Link href='/donation' locale='ar'>
                    {/*we just need to direct the href to the page we need so if we are in home page we leave it empty other wise we only put /.. */}
                    العربية
                </Link>
                <Link href='/donation' locale='en'>
                    English
                </Link>
            </div>
        </div>
    );
}
export function Auth() {
    // eslint-disable-next-line unused-imports/no-unused-vars
    const { t } = useTranslation("donation");
    return (
        <div>
            <donation />
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["button"])),
            // Will be passed to the page component as props
        },
    };
}
