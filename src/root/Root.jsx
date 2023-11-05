import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default Root;