import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MemberList from "@/components/Members/MemberList";

const Team = () => {
    const { t } = useTranslation("members");
    return (
        <div>
            <MemberList />
        </div>
    );
};

export default Team;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["members"])),
        },
    };
}
