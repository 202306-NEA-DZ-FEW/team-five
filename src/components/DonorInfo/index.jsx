import { useTranslation } from "next-i18next";
import React, { useState } from "react";

function DonorInformation() {
    const [donationType, setDonationType] = useState("personal");
    const { t } = useTranslation("payment");
    return (
        <div className=' flex flex-col items-center'>
            <div className='flex justify-between w-96 mb-4'>
                <h1 className='text-[#20DC49] text-left'>
                    {t("payment.donoInfo")}
                </h1>
                <div className='personal flex items-center bg-[#20DC49]'>
                    <input
                        type='radio'
                        id='personal'
                        name='donation-type'
                        checked={donationType === "personal"}
                        onChange={() => setDonationType("personal")}
                    />
                    {t("payment.persDonation")}
                    {donationType === "personal" && (
                        <span className='ml-2 text-white'>&#10003;</span>
                    )}
                </div>
                <div className='organization flex items-center bg-[#20DC49]'>
                    <input
                        type='radio'
                        id='organization'
                        name='donation-type'
                        checked={donationType === "organization"}
                        onChange={() => setDonationType("organization")}
                    />
                    {t("payment.orgDonation")}
                    {donationType === "organization" && (
                        <span className='ml-2 text-white'>&#10003;</span>
                    )}
                </div>
            </div>
            <div className='flex justify-between w-96'>
                <h2 className='text-[#20DC49] text-left'>
                    {t("payment.name")}
                </h2>
                <div className='w-1/2'>
                    <div className='first-name'>{t("payment.firstName")}</div>
                    <input
                        type='text'
                        id='first-name'
                        className='w-full'
                        placeholder={t("payment.firstName")}
                    />
                </div>
                <div className='w-1/2'>
                    <div className='last-name'>{t("payment.lastName")}</div>
                    <input
                        type='text'
                        id='last-name'
                        className='w-full'
                        placeholder={t("payment.lastName")}
                    />
                </div>
            </div>
        </div>
    );
}

export default DonorInformation;
