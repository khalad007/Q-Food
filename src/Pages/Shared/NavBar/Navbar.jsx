import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import defaultUserPic from "../../../assets/user.png"
import logo from "../../../assets/logo.png"


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <Link><img className="h-14" src={logo} alt="Site Logo" /></Link>
            </div>

            <div className="navbar-end">
              
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user ? user.photoURL || defaultUserPic : defaultUserPic} alt="User Profile" />
                    </div>
                </label>

                {
                    user ? <>
                        <span className="mr-2 font-semibold">{user.displayName}</span>
                        <button onClick={handleSignOut} className="btn btn-neutral">Sign Out</button>
                    </>
                        :
                        <Link to="/login"><button className="btn bg-[#3FCDA6] text-black">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;