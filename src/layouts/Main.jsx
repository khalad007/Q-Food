import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/NavBar/Navbar";
import Navbar2 from "../Pages/Shared/NavBar/Navbar2";


const Main = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <Navbar></Navbar>
            </div>
            <Navbar2></Navbar2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;