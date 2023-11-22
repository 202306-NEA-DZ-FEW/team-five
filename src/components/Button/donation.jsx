import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Donation() {
    // introduction of the translation
    const { t } = useTranslation("button");
    return (
        <div>
            <Link href='/coupons'>
                {/* button with the translation */}
                <button class='py-2 px-4 text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 rounded-full bg-[#8CC540]'>
                    <p>{t("donation")}</p>
                </button>
            </Link>
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
