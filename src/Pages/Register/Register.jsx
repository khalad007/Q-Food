import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left my-6">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                </div>
                {/* for google sign in  */}

                <div className="flex justify-center items-center w-full">
                    <button onClick={handleGoogleSignIn} className='flex p-4 text-3xl font-bold items-center border rounded ' href="">
                        <FcGoogle></FcGoogle>
                        Google
                    </button>
                </div>


                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="displayName" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Photo URL" name="photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    {
                        registerError && <p className="text-center text-red-700 font-bold">{registerError}*</p>
                    }
                    {
                        success && <p className="text-center text-green-600 font-bold">{success}*</p>
                    }


                    <p className="text-base font-semibold text-center py-10">Already Have An Account ?
                        <Link className="text-[#F75B5F]" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;