const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "The Future of Web Development",
            excerpt: "Exploring emerging trends and technologies that will shape the future of web development.",
            date: "June 15, 2024",
            author: "John Doe"
        },
        {
            id: 2,
            title: "Building Scalable React Applications",
            excerpt: "Best practices for creating React applications that can grow with your business needs.",
            date: "June 10, 2024",
            author: "Jane Smith"
        },
        {
            id: 3,
            title: "Design Systems That Work",
            excerpt: "How to create and maintain design systems that improve consistency and efficiency.",
            date: "June 5, 2024",
            author: "Mike Johnson"
        }
    ];

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-white mb-8">Our Blog</h1>
                <div className="space-y-6">
                    {posts.map((post) => (
                        <article key={post.id}
                                 className="bg-gradient-to-r rounded-lg shadow-md p-6 hover:shadow-violet-600 transition-shadow">
                            <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
                            <p className="text-gray-500 mb-4">{post.excerpt}</p>
                            <div className="flex items-center justify-between text-sm text-gray-400">
                                <span>By {post.author}</span>
                                <span>{post.date}</span>
                            </div>
                            <button className="mt-4 text-violet-600 hover:text-violet-800 font-medium">
                                Read More →
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;