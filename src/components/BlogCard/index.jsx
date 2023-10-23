import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const BlogCard = ({ blog }) => {
    const { t } = useTranslation("blogcard");
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg m-4'>
            <Image
                src={blog.image}
                alt={blog.title}
                className='w-full h-56 object-cover'
            />
            <div className='p-4'>
                <h2 className='font-bold text-xl mb-2'>{blog.title}</h2>
                <div className='flex items-center mb-2'>
                    <Image
                        src={blog.authorImage}
                        alt={blog.author}
                        className='w-8 h-8 rounded-full mr-2'
                    />
                    <span className='text-gray-700'>{blog.author}</span>
                </div>
                <p className='text-gray-600 mb-4'>{blog.shortDescription}</p>
                <Link href={`/blog/${blog.slug}`}>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                        <p>{t("blogcard.Read")}</p>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
