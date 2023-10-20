import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

function Email() {
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

                        <button
                            type='submit'
                            class='py-2 px-4 bg-green-500 text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 rounded-full'
                            style={{ width: "150px" }}
                        >
                            {t("submit")}
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
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",

                    marginTop: "2rem",
                }}
            >
                <Link href='/Emails' locale='en'>
                    English
                </Link>
                <Link href='/Emails' locale='ar'>
                    العربية
                </Link>
            </div>
        </layout>
    );
}

export default Email;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["emails"])),
            // Will be passed to the page component as props
        },
    };
}
