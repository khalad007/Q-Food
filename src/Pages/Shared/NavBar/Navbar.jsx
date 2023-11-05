import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import defaultUserPic from "../../../assets/user.png"


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    // const handleSignOut = () => {
    //     logOut()
    //         .then()
    //         .catch()
    // }


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <Link><img className="h-14" src="https://i.ibb.co/NyqZ9fw/logo-removebg-preview.png" alt="Site Logo" /></Link>
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
                        <Link to="/login"><button className="btn btn-neutral">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;