import { useEffect, useState } from "react";

const API_ROOT = "https://perth-api.onrender.com/api/posts/";

const Body = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);
    const [pageUrl, setPageUrl] = useState(API_ROOT);

    useEffect(() => {
        let mounted = true;
        setLoading(true);
        setError(null);
        fetch(pageUrl)
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => {
                if (!mounted) return;
                // Support both plain array responses and paginated DRF-style responses
                if (Array.isArray(data)) {
                    setPosts(data);
                    setNext(null);
                    setPrevious(null);
                } else if (data.results) {
                    setPosts(data.results);
                    setNext(data.next);
                    setPrevious(data.previous);
                } else if (data.data) {
                    setPosts(data.data);
                } else {
                    // fallback if API returns object of posts keyed differently
                    setPosts([]);
                }
            })
            .catch((err) => {
                setError(err.message || "Failed to load posts");
            })
            .finally(() => setLoading(false));

        return () => {
            mounted = false;
        };
    }, [pageUrl]);

    const goTo = (url) => {
        if (!url) return;
        setPageUrl(url);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="container mx-auto px-2 md:px-3 lg:px-4 flex flex-col gap-y-8 py-6">
            <div className="w-full sm:w-[70%] lg:w-[50%] xl:w-[50%]">
                <h1 className="text-2xl md:text-xl lg:3xl xl:text-4xl  text-cyan-500 font-semibold text-start py-4">
                    Where Sweet Moments Begin
                </h1>
                <p className="text-sm font-normal text-black leading-normal">
                    Step into a world of irresistible flavors, delightful
                    textures, and handcrafted treats. From rich chocolate
                    indulgences to light, fluffy pastries and colorful candies,
                    this is your go-to space for discovering recipes, baking
                    tips, confectionery trends, and sweet inspiration that turns
                    everyday moments into something extraordinary.
                </p>
            </div>

            {/* blogs */}
            <div className="w-full flex items-center justify-center py-8">
                {loading ? (
                    <div>Loading posts...</div>
                ) : error ? (
                    <div className="text-red-600">Error: {error}</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-start gap-16 w-full ">
                        {posts.map((blog, idx) => {
                            const slug =
                                blog.slug ?? blog.slugified ?? blog.id ?? idx;
                            const image =
                                blog.image ??
                                blog.image_url ??
                                blog.thumbnail ??
                                "";
                            const date =
                                blog.date ??
                                blog.published ??
                                blog.created ??
                                "";
                            const title = blog.title ?? blog.name ?? "Untitled";
                            const subtitle =
                                blog.subtitle ??
                                blog.excerpt ??
                                blog.description ??
                                "";

                            return (
                                <a
                                    href={`/blog/${slug}`}
                                    key={slug + idx}
                                    className="w-full flex flex-col gap-y-3 "
                                >
                                    {image ? (
                                        <img
                                            src={image}
                                            className="object-cover hover:scale-105 transition-all duration-300 ease-in-out h-[300px]"
                                            alt=""
                                        />
                                    ) : (
                                        <div className="bg-gray-200 h-48 w-full" />
                                    )}
                                    <span className="text-sm font-normal text-black hover:text-primary transition-all duration-300 ease-in-out">
                                        {date}
                                    </span>
                                    <div className="py-2 flex flex-col gap-y-3">
                                        <h2 className="text-sm font-semibold text-primary">
                                            {title}
                                        </h2>
                                        <p className="text-sm text-pretty font-normal text-black/60 hover:text-primary transition-all duration-300 ease-in-out">
                                            {subtitle}
                                        </p>
                                        <span className="text-sm text-primary font-normal border-b-1 border-primary pb-1 w-fit hover:scale-105 transition-all duration-300 ease-in-out">
                                            Read More{" "}
                                        </span>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* pagination controls */}
            <div className="w-full flex items-center justify-center gap-x-4 py-6">
                <button
                    onClick={() => goTo(previous)}
                    disabled={!previous}
                    className="px-4 py-2 bg-black disabled:opacity-50 disabled:cursor-not-allowed rounded text-white"
                >
                    Previous
                </button>
                {/* <button onClick={() => setPageUrl(API_ROOT)} className="px-4 py-2 bg-gray-100 rounded">First</button> */}
                <button
                    onClick={() => goTo(next)}
                    disabled={!next}
                    className="px-4 py-2 bg-black text-white disabled:opacity-50 disabled:cursor-not-allowed rounded"
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default Body;
