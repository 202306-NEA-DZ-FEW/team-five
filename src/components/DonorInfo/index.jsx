import React, { useState } from "react";
// import { useTranslation } from "next-i18next";

function DonorInformation() {
    const [donationType, setDonationType] = useState("personal");
    // const { t } = useTranslation("")
    return (
        <div className=' flex flex-col items-center'>
            <div className='flex justify-between w-96 mb-4'>
                <div className='personal flex items-center bg-[#20DC49]'>
                    <input
                        type='radio'
                        id='personal'
                        name='donation-type'
                        checked={donationType === "personal"}
                        onChange={() => setDonationType("personal")}
                    />
                    Personal Donation
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
                    Organization Donation
                    {donationType === "organization" && (
                        <span className='ml-2 text-white'>&#10003;</span>
                    )}
                </div>
            </div>
            <div className='flex justify-between w-96'>
                <div className='w-1/2'>
                    <div className='first-name'>First Name:</div>
                    <input
                        type='text'
                        id='first-name'
                        className='w-full'
                        // placeholder={t("")}
                    />
                </div>
                <div className='w-1/2'>
                    <div className='last-name'>Last Name:</div>
                    <input
                        type='text'
                        id='last-name'
                        className='w-full'
                        // placeholder={t("")}
                    />
                </div>
            </div>
        </div>
    );
}

export default DonorInformation;
