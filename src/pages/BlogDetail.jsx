import DetailHeader from "../components/DetailHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_ROOT = "https://perth-api.onrender.com/api/posts/";

const BlogDetail = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) return;
        let mounted = true;
        setLoading(true);
        setError(null);
        fetch(`${API_ROOT}${slug}/`)
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => {
                if (!mounted) return;
                setPost(data);
            })
            .catch((err) => setError(err.message || "Failed to load post"))
            .finally(() => setLoading(false));

        return () => {
            mounted = false;
        };
    }, [slug]);

    const image = post?.image ?? post?.image_url ?? "";
    // const content = post?.content ?? post?.body ?? post?.description ?? "";
    const title = post?.title ?? post?.name ?? "";
    const subtitle = post?.subtitle ?? post?.excerpt ?? post?.description ?? "";
    const date = post?.date ?? post?.published ?? post?.created ?? "";

    return (
        <main className="w-full h-full flex flex-col">
            {/* <DetailHeader /> */}
            {/* blog content */}
            <section className="container mx-auto px-2 md:px-3 lg:px-4  ">
                <div className="w-full flex flex-col gap-y-6 py-8">
                    {loading ? (
                        <div>Loading post...</div>
                    ) : error ? (
                        <div className="text-red-600">Error: {error}</div>
                    ) : post ? (
                        <>
                            <div className="py-4 w-full">
                                {image ? (
                                    <img
                                        src={image}
                                        className="object-cover w-full h-[400px] lg:h-[500px]"
                                        alt=""
                                    />
                                ) : (
                                    <div className="bg-gray-200 w-full h-[400px]" />
                                )}
                            </div>
                            <h1 className="text-2xl lg:text-3xl font-semibold text-primary">
                                {title}
                            </h1>
                            <span className="text-sm text-black/70">
                                {date}
                            </span>
                            <div>
                                <div
                                    className="text-pretty text-sm text-black/75  font-normal leading-loose"
                                    dangerouslySetInnerHTML={{
                                        __html: post.content,
                                    }}
                                />
                            </div>
                            <p className="text-sm text-pretty font-normal text-black/80 ">
                                {subtitle}
                            </p>
                        </>
                    ) : (
                        <div>No post found.</div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default BlogDetail;
