import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../component/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster/>
            <Footer></Footer>
        </div>
    );
};

export default Root;