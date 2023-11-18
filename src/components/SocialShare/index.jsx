import { useTranslation } from "next-i18next";
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    PinterestIcon,
    PinterestShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
} from "next-share";
import React from "react";
const hostUrl = `http://${process.env.NEXT_PUBLIC_HOST_URL}/`;
export default function SocialShare() {
    const { t } = useTranslation("success");
    return (
        <div>
            <center className='m-5'>
                <b>{t("success.share")}</b>
            </center>
            <div className='justify-between ml-5 mr-5 space-x-5'>
                <FacebookShareButton
                    url={hostUrl}
                    quote="I'm making the world a better place by helping feed the ones in need. Together, we can make a change!"
                    hashtag='#feedtheneedy'
                >
                    <FacebookIcon size={50} round />
                </FacebookShareButton>
                <TwitterShareButton
                    url={hostUrl}
                    title="I'm making the world a better place by helping feed the ones in need. Together, we can make a change!"
                    hashtag='#feedtheneedy'
                >
                    <TwitterIcon size={50} round />
                </TwitterShareButton>
                <PinterestShareButton
                    url={hostUrl}
                    title="I'm making the world a better place by helping feed the ones in need. Together, we can make a change!"
                    hashtag='#feedtheneedy'
                >
                    <PinterestIcon size={50} round />
                </PinterestShareButton>
                <TelegramShareButton
                    url={hostUrl}
                    title="I'm making the world a better place by helping feed the ones in need. Together, we can make a change!"
                    hashtag='#feedtheneedy'
                >
                    <TelegramIcon size={50} round />
                </TelegramShareButton>
                <EmailShareButton
                    url={hostUrl}
                    subject='#feedtheneedy'
                    body="I'm making the world a better place by helping feed the ones in need. Together, we can make a change!"
                >
                    <EmailIcon size={50} round />
                </EmailShareButton>
            </div>
        </div>
    );
}
