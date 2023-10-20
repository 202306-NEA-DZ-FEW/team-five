import Image from "next/image";
import { useTranslation } from "next-i18next";
const MemberCard = ({ member }) => {
    const { name, image, socialMedia, description, memberShip } = member;
    const { t } = useTranslation("members");
    return (
        <div className='bg-white flex flex-col gap-4 items-center rounded-md w-96 shadow-lg relative '>
            <figure className='absolute'>
                <Image
                    src={image}
                    alt={name}
                    width={150}
                    height={150}
                    className='rounded-full shadow-md object-cover -translate-y-[75%]'
                />
            </figure>
            <div className='flex flex-col gap-4 p-6 w-96 '>
                <span className='bg-green-100 text-sm font-medium text-green-600 text-center px-2 rounded-md self-start'>
                    {memberShip}
                </span>
                <h3 className='text-xl font-bold text-center'>{name}</h3>
                <p className='text-center font-medium text-gray-700 whitespace-normal'>
                    {description}
                </p>
                <div className='flex space-x-5  justify-center '>
                    {socialMedia.map((platform, index) => (
                        <a
                            key={index}
                            href={platform.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-slate-700 text-2xl '
                        >
                            {platform.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default MemberCard;
