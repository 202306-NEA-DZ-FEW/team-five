import Link from "next/link";
import { useTranslation } from "next-i18next";

import Donation from "../Button/donation";

function Email() {
    <div
        style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",

            marginTop: "2rem",
        }}
    >
        <Link href='/Emails' locale='en'>
            EN
        </Link>
        <Link href='/Emails' locale='ar'>
            AR
        </Link>
    </div>;
    const { t } = useTranslation("emails");
    return (
        <layout>
            <div className='grid grid-cols-2 '>
                <div className='col-start'>
                    <h1 className='text-gray-500  font-bold text-lg'>
                        <p>{t("GetupdateonBlogandEvents")}</p>
                    </h1>
                    <h2 className='text-gray-400  font-bold text-lg'>
                        <p>{t("Getdirectlyonyouremail")}</p>
                    </h2>
                </div>
                <div className='col-end flex h-7'>
                    <form
                        action='https://formsubmit.co/sidisaidmel@gmail.com'
                        method='POST'
                    >
                        <input
                            type='email'
                            placeholder={t("email")}
                            name='email'
                            class=' border-2 border-gray-300 rounded h-11 '
                            style={{ width: "400px" }}
                        />

                        <input
                            type='hidden'
                            name='_subject'
                            value='New submission!'
                        />

                        <button>
                            <Donation />
                        </button>
                        <input
                            type='hidden'
                            name='_autoresponse'
                            value='Successfully subscribed'
                        ></input>
                    </form>
                </div>
            </div>

            <div className='grid grid-cols-2'>
                <h1></h1>
                <h1 className='col-end flex h-7'>{t("privacyPolicy")}</h1>
            </div>
        </layout>
    );
}

export default Email;

// export async function getStaticProps({ locale }) {
//     return {
//         props: {
//             ...(await serverSideTranslations(locale, ["emails"])),
//             // Will be passed to the page component as props
//         },
//     };
// }
