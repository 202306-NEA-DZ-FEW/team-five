import React from "react";

function Blogcard({ imageUrl, title, author, date, description }) {
    return (
        <div className='flex max-w-lg mx-auto'>
            <div class='bg-white  border-gray-200 rounded-lg max-w-sm mb-5 py-5'>
                <a href='#'>
                    <img
                        src={imageUrl}
                        alt='blog image'
                        width={250}
                        height={200}
                    />
                </a>
                <div>
                    <h2 className='text-xl font-bold mb-2'>{title}</h2>
                </div>
                <div>
                    <p className='text-sm text-gray-600'>Author: {author}</p>
                    <p className='text-sm text-gray-600'>{date}June 28, 2023</p>
                </div>

                <div className=''>
                    <a href='#'>
                        <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2'>
                            Post Title
                        </h5>
                    </a>

                    <p className='text-sm mb-2'>
                        {description}Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Donec eget tempus velit, eu porttitor
                        leo. Suspendisse pretium metus nec orci placerat
                        scelerisque. Morbi porttitor, metus rutrum molestie
                        interdum, eros odio semper sapien, sed fringilla mauris
                        dui eu velit. Etiam hendrerit porta nibh eget viverra.
                        Mauris neque tellus,
                    </p>
                </div>

                <a href='#' className='underline p-2'>
                    View Post
                </a>
            </div>
        </div>
    );
}

export default Blogcard;
