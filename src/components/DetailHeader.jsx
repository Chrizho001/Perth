import banner from "../assets/images/banner.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Hero = () => {
    const data = {
        title: "This way is wrong about UI Design.",

        image: banner,
        content:
            "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    };
    return (
        <section className="container mx-auto  py-8 px-2 md:px-3 lg:px-4 flex items-start justify-center min-h-screen">
            <div className="w-full  flex flex-col sm:flex-row-reverse items-center justify-between gap-12">
                {/* hero image */}
                <div className=" w-full md:w-[35%] flex ">
                    <img src={banner} className="w-full  object-cover lg:h-[500px]" alt="" />
                </div>
                {/* hero blog post */}
                <div className="w-full md:w-[50%] flex flex-col gap-y-4 ">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black/80">
                        {data.title}
                    </h2>
                    <span className="text-pretty text-sm font-normal text-black/60">
                        {data.content}
                    </span>

                    {/* social links */}
                    <div className="grid grid-cols-3 gap-2 md:gap-x-4 font-light py-3">
                        <a
                            href="#"
                            className="w-full py-4 px-2 flex items-center justify-center gap-x-2 md:gap-x-6 lg:gap-x-8 bg-sky-500 text-white hover:scale-105 transition-all duration-300 ease-in-out "
                        >
                            <FaXTwitter className="text-lg md:text-2xl lg:text-2xl" />
                            <span className="text-sm font-normal text-white">
                                Twitter
                            </span>
                        </a>
                        <a
                            href="#"
                            className="w-full py-4 px-2 flex items-center justify-center gap-x-2 md:gap-x-6 lg:gap-x-8 bg-sky-800 text-white hover:scale-105 transition-all duration-300 ease-in-out "
                        >
                            <FaLinkedinIn className="text-lg md:text-2xl lg:text-2xl" />
                            <span className="text-sm font-normal text-white">
                                LinkedIn
                            </span>
                        </a>
                        <a
                            href="#"
                            className="w-full py-4 px-2 flex items-center justify-center gap-x-2 md:gap-x-6 lg:gap-x-8 bg-black text-white hover:scale-105 transition-all duration-300 ease-in-out "
                        >
                            <FaMedium className="text-lg md:text-2xl lg:text-2xl" />
                            <span className="text-sm font-normal text-white">
                                Medium
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
