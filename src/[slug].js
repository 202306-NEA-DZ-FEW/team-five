import { useRouter } from "next/router";

import articles from "./pages/Bloga";

const BlogPost = () => {
    const router = useRouter();
    const { slug } = router.query;

    // Find the blog post based on the slug parameter
    const blog = articles.find((b) => b.slug === slug);

    if (!blog) {
        return <div>Blog post not found</div>;
    }

    return (
        <div className='max-w-2xl mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-4'>{blog.title}</h1>
            <div className='flex items-center mb-2'>
                <img
                    src={blog.authorImage}
                    alt={blog.author}
                    className='w-10 h-10 rounded-full mr-2'
                />
                <span className='text-gray-700'>{blog.author}</span>
            </div>
            <img
                src={blog.image}
                alt={blog.title}
                className='w-full h-64 object-cover mb-4'
            />
            <div className='text-gray-700 mb-4'>{blog.fullArticle}</div>
        </div>
    );
};

export default BlogPost;
