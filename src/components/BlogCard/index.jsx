import Link from "next/link";
import { useTranslation } from "next-i18next";

const BlogCard = ({ blog }) => {
    const { t } = useTranslation("BlogCard");

    const authorsNames = [
        "Achraf Mehanneche",
        "Sidahmed Slikh",
        "Mohammed Tchoketch",
        "Abdelhamid Serhan",
        "MelisaMilyssa Sidisaid",
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

    return (
        <div className='relative max-w-sm rounded overflow-hidden shadow-lg m-4 '>
            <img
                src={blog.image}
                alt={blog.title}
                className='w-full h-56 object-cover'
            />
            <div className='flex flex-col flex-grow p-4'>
                <h2 className='font-bold text-xl mb-2'>{blog.title}</h2>
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
                    {blog.description}
                </p>
                <div className='mt-auto'></div>
                <Link href={`/blog/${blog.slug}`}>
                    <button className='absolute bottom-0 left-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-1 rounded-full text-center'>
                        <p>{t("Read")}</p>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
