import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function GoBack() {
    const { t } = useTranslation("success");

    return (
        <Link
            className='text-center font-bold p-2 pr-8 pl-8'
            type='button'
            href='/coupons'
        >
            {t("success.back")}
        </Link>
    );
}
