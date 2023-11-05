import Link from "next/link";
import { useTranslation } from "next-i18next";

const BlogCard = ({ blog }) => {
    const { t } = useTranslation("BlogCard");

    const authorsNames = [
        "Achraf Mehanneche ",
        "Sidahmed Slikh    ",
        "Mohammed Tchoketch",
        "Abdelhamid Serhan ",
        "Mellisa Sidisaid  ",
    ];
    const images = [
        "achraf.jpg",
        "sidahmed.jpg",
        "admin.svg",
        "hamid_ahmidat.jpg",
        "melisa.jpg",
    ];

    const randomIndex = Math.floor(Math.random() * authorsNames.length);
    const randomAuthorName = authorsNames[randomIndex];
    const randomAuthorImage = images[randomIndex];

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + "... ";
    };

    const truncatedTitle = truncateText(blog.title, 65);
    const truncatedDescription = truncateText(blog.description, 210);

    return (
        <div className='relative w-[416px] h-[528px] rounded overflow-hidden shadow-lg m-4 hover:bg-gray-100 transform hover:scale-105 transition duration-300 ease-in-out'>
            <img
                src={blog.image}
                alt={blog.title}
                className='w-full h-56 object-cover'
            />
            <div className='flex flex-col flex-grow p-4'>
                <h2 className='font-bold text-xl mb-2'>{truncatedTitle}</h2>
                <div className='flex items-center mb-2'>
                    <img
                        src={`./${randomAuthorImage}`}
                        alt={randomAuthorName}
                        className='w-8 h-8 rounded-full mr-2'
                    />
                    <div className='flex space-x-4 mr-4 text-gray-700'>
                        {randomAuthorName}
                    </div>
                    <div className='flex space-x-4 text-gray-700'>
                        {blog.publishedAt}
                    </div>
                </div>
                <p className='text-gray-600 mb-4 flex-grow p-4'>
                    {truncatedDescription}
                </p>
                <div className='mt-auto'></div>

                <button
                    className='absolute bottom-0 left-0 hover:text-gray-300 text-green-500 font-bold py-2 px-4 mb-1 rounded-full text-center'
                    style={{ textDecoration: "underline" }}
                >
                    <p>{t("Read")}</p>
                </button>
            </div>
        </div>
    );
};

export default BlogCard;
