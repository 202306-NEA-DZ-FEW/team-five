import React from "react";

const BlogCard = ({ title, content, date, author, authorAvatar, imageUrl }) => {
    return (
        <div className='bg-white shadow-lg rounded-lg p-6 mb-4'>
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    className='mb-4 rounded-lg w-full h-48 object-cover'
                />
            )}
            <h2 className='text-xl font-bold mb-2'>{title}</h2>
            <div className='flex items-center text-gray-600 mb-2'>
                {authorAvatar && (
                    <img
                        src={authorAvatar}
                        alt={author}
                        className='w-8 h-8 rounded-full mr-2 object-cover'
                    />
                )}
                <p>{author}</p>
                <p className='ml-2'>{date}</p>
            </div>
            <p>{content}</p>
        </div>
    );
};

export default BlogCard;
