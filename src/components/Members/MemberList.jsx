import { useTranslation } from "next-i18next";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MemberCard from "./MemberCard";

const MemberList = () => {
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                className='p-4 text-black bg-opacity-25 text-2xl z-30 absolute lg:left-0 left-2 top-1/2'
                onClick={onClick}
            >
                <PiCaretLeftLight />
            </button>
        );
    };
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                className='p-4 text-black bg-opacity-25 text-2xl z-30 absolute lg:right-0 right-2 top-1/2'
                onClick={onClick}
            >
                <PiCaretRightLight />
            </button>
        );
    };

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
            image: "/mohamed_tchoketch.png",
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

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        variableWidth: true,
        centerPadding: "0px",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        centerMode: true,
        adaptiveHeight: true,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 920,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                    initialSlide: 0,
                },
            },
        ],
    };
    return (
        <section className=' max-w-6xl mx-auto flex flex-col container justify-center min-h-screen gap-4 overflow-y-visible'>
            <h1 className='text-6xl font-bold text-center mb-20 text-[#212B36]'>
                {t("member.team")}
            </h1>

            <Slider {...settings} className='w-full px-4'>
                {members.map((member, index) => (
                    <div className='py-32 mx-6' key={index}>
                        <MemberCard member={member} />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default MemberList;
