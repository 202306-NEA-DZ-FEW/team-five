import React from "react";

import BlogCard from "@/components/BlogCard";

// PlaceHolder for Fake api

const fakeBlogData = [
    {
        id: 1,
        title: "Blog Title 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2023-10-21",
        author: "Achraf",
        authorAvatar: "children.png",
        imageUrl: "children.png",
    },
    {
        id: 2,
        title: "Blog Title 2",
        content:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        date: "2023-10-22",
        author: "Zino",
        authorAvatar: "children.png",
        imageUrl: "children.png",
    },
    {
        id: 3,
        title: "Blog Title 3",
        content:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        date: "2023-10-22",
        author: "Hamid",
        authorAvatar: "children.png",
        imageUrl: "children.png",
    },
    {
        id: 4,
        title: "Blog Title 4",
        content:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        date: "2023-10-22",
        author: "Zino",
        authorAvatar: "children.png",
        imageUrl: "children.png",
    },
    {
        id: 5,
        title: "Blog Title 5",
        content:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        date: "2023-10-22",
        author: "Achraf",
        authorAvatar: "children.png",
        imageUrl: "children.png",
    },
];

function Blog() {
    return (
        <div>
            <div className='absolute flex justify-between'>
                <img
                    className='relative top-0 right-0 bottom-0 left-0 h-full w-full overflow'
                    src='children.png'
                    alt='cheldren image'
                />
                <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow bg-[hsla(0,0%,0%,0.75)]'>
                    <div className='flex h-full items-center justify-center'>
                        <div className='px-6 text-center text-white md:px-12'>
                            <h1 className='mt-2 mb-1 text-4xl font-semibold tracking-tight'>
                                <span>YOU CAN CHANGE PEOPLE LIVES</span>
                            </h1>
                            <p className='text-xl mb-10'>
                                Give with care, make a simple impact.
                            </p>
                            <button
                                type='button'
                                className='rounded border-2
             border-neutral-50 
             px-[46px] pt-[14px] 
             pb-[12px] text-sm font-medium 
             uppercase leading-normal
             text-neutral-50 transition 
             duration-150 ease-in-out
              hover:border-neutral-100
               hover:bg-neutral-100 hover:bg-opacity-10
                hover:text-neutral-100
                 focus:border-neutral-100
                  focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200'
                                data-te-ripple-init
                                data-te-ripple-color='light'
                            >
                                Donation
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-sky-600'>
                            Latest Blog Posts
                        </p>
                        <p className='text-gray-600'>
                            The world needs to fight with the hunger. learn
                            more.
                        </p>
                    </div>

                    <div>
                        <div className='container mx-auto my-10'>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                {fakeBlogData.map((blog) => (
                                    <BlogCard
                                        key={blog.id}
                                        title={blog.title}
                                        content={blog.content}
                                        date={blog.date}
                                        author={blog.author}
                                        authorAvatar={blog.authorAvatar}
                                        imageUrl={blog.imageUrl}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
