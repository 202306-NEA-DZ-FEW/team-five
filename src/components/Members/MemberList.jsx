import { useTranslation } from "next-i18next";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

import MemberCard from "./MemberCard";
const MemberList = () => {
    const { t } = useTranslation("members");
    const members = [
        {
            name: `${t("member.hamid")}`,
            image: "/hamid_ahmidat.jpg",
            memberShip: `${t("member.member")}`,
            description: `${t("member.hamidDiscription")}`,
            socialMedia: [
                {
                    icon: <ImFacebook />,
                    url: "https://www.facebook.com/hamid.ahmidat.3/",
                },
                { icon: <ImGithub />, url: "https://github.com/HamidAhmidat" },
                {
                    icon: <BsLinkedin />,
                    url: "https://www.linkedin.com/in/hamid-ahmidat/",
                },
            ],
        },

        {
            name: `${t("member.sidAhmed")}`,
            image: "/sidahmed.jpg",
            memberShip: `${t("member.member")}`,
            description: `${t("member.sidAhmedDiscription")}`,
            socialMedia: [
                {
                    icon: <ImFacebook />,
                    url: "https://www.facebook.com",
                },
                { icon: <ImGithub />, url: "https://github.com/Zino0031" },
                {
                    icon: <BsLinkedin />,
                    url: "https://www.linkedin.com/in/sidahmed-zinedine/",
                },
            ],
        },
        {
            name: `${t("member.milysa")}`,
            image: "/melisa.jpg",
            memberShip: `${t("member.member")}`,
            description: `${t("member.milysaDiscription")}`,
            socialMedia: [
                {
                    icon: <ImFacebook />,
                    url: "https://www.facebook.com/",
                },
                {
                    icon: <ImGithub />,
                    url: "https://github.com/melissasidisid",
                },
                {
                    icon: <BsLinkedin />,
                    url: "https://www.linkedin.com/in/milyssa-sidisaid-46170a232/",
                },
            ],
        },
        {
            name: `${t("member.tchoketch")}`,
            image: "/hamid_ahmidat.jpg",
            memberShip: `${t("member.member")}`,
            description: `${t("member.tchoketchDiscription")}`,
            socialMedia: [
                {
                    icon: <ImFacebook />,
                    url: "https://www.facebook.com/profile.php?id=61550933040267",
                },
                { icon: <ImGithub />, url: "https://github.com/mohamed70601" },
                {
                    icon: <BsLinkedin />,
                    url: "https://www.linkedin.com/in/mohamed-r-tchoketch-584b54285/",
                },
            ],
        },
        {
            name: `${t("member.achraf")}`,
            image: "/achraf.jpg",
            memberShip: `${t("member.member")}`,
            description: `${t("member.achrafDiscription")}`,
            socialMedia: [
                {
                    icon: <ImFacebook />,
                    url: "https://www.facebook.com/achraf.mehanneche/",
                },
                {
                    icon: <ImGithub />,
                    url: "https://github.com/DigitalDeveloperAM",
                },
                {
                    icon: <BsLinkedin />,
                    url: "https://www.linkedin.com/in/achraf-mehanneche-07a832251/",
                },
            ],
        },
    ];

    const slideLeft = () => {
        const slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        const slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    return (
        <section className='px-4 md:p-0 flex flex-col container justify-center mx-auto min-h-screen gap-20 overflow-y-visible'>
            <h1 className='text-4xl font-bold text-center text-[#212B36]'>
                {t("member.team")}
            </h1>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
                <div
                    id='slider'
                    className='w-full h-full flex gap-20 whitespace-nowrap overflow-x-scroll scroll-smooth no-scrollbar relative overflow-y-visible p-40'
                >
                    {members.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
            </div>
        </section>
    );
};

export default MemberList;
