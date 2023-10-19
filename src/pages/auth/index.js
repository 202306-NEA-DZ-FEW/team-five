import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useState } from "react";

import Signin from "@/components/Auth/Signin/index";
import Signup from "@/components/Auth/Signup/index";

export default function Auth() {
    // eslint-disable-next-line unused-imports/no-unused-vars
    const { t } = useTranslation("signup");
    const [currentComponent, setCurrentComponent] = useState("signin");

    const toggleComponent = () => {
        if (currentComponent === "signin") {
            setCurrentComponent("signup");
        } else {
            setCurrentComponent("signin");
        }
    };

    return (
        <div>
            {currentComponent === "signin" ? (
                <Signin onToggleComponent={toggleComponent} />
            ) : (
                <Signup onToggleComponent={toggleComponent} />
            )}
        </div>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["signup"])),
        },
    };
}
