import banner from "../assets/images/myhero.jpg";
import { IoFastFoodSharp } from "react-icons/io5";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="w-full flex flex-col items-start min-h-screen lg:min-h-[90vh] mb-16"
        >
            <Navbar />
            <div className="container mx-auto min-h-[60vh] px-2 md:px-3 lg:px-4 flex items-center sm:justify-start justify-center">
                

            </div>
        </section>
    );
};

export default Hero;
