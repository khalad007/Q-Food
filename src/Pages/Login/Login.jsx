
import { FcGoogle } from "react-icons/fc";

const Login = () => {


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left my-6">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                    </div>
                    {/* for google sign in  */}

                    <div className="flex justify-center items-center w-full">
                        <button onClick={handleGoogleSignIn} className='flex p-4 text-3xl font-bold items-center border rounded ' href="">
                            <FcGoogle></FcGoogle>
                            Google
                        </button>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#247CC6] text-white">Sign In</button>
                            </div>
                        </form>
                        {
                            loginError && <p  className="text-center text-red-700 font-bold mt-3">{loginError}</p>
                        }
                        <p className="text-base font-semibold text-center py-10">Don't Have An Account ?
                            <Link className="text-[#F75B5F]" to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;