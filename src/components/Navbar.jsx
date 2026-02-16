import { MdOutlineFastfood } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="container mx-auto flex  items-center justify-between py-4 px-2 md:px-3 lg:px-4">
            {/* logo */}
            <div
                onClick={() => navigate("/")}
                className="w-fit flex flex-col  gap-x-2"
            >
                <div className="flex items-center gap-2">
                    <span className="text-3xl text-gray-200">
                        <MdOutlineFastfood />
                    </span>
                    <h1 className="text-xl font-semibold text-gray-100 md:text-xl lg:text-2xl tracking-tight leading-tight cursor-pointer">
                        PErth
                    </h1>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
