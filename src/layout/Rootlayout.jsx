import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Rootlayout = () => {
  return (
    <div className="flex flex-col w-full h-full">
        {/* <Navbar /> */}
        <div className="flex w-full ">
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Rootlayout