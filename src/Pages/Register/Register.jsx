import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');


    const auth = getAuth();
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // Google Sign-In successful, you can handle the user creation or login here
                const user = result.user;
                console.log(user);
                // Redirect or handle the user state as needed
            })
            .catch((error) => {
                // Handle Google Sign-In error
                console.error(error);
            });
    };




    const handleRegister = e => {

        e.preventDefault();
        const form = e.target;

        const displayName = form.displayName.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        console.log(displayName, password, email, photoURL);

        //reset success & error message 
        setRegisterError('');
        setSuccess('');


        //password validation
        if (password.length < 6) {
            setRegisterError('Password is less then 6 Character');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setRegisterError('Password must contain at least one capital letter');
            return;
        }

        if (!/[^a-zA-Z0-9]/.test(password)) {
            setRegisterError('Password must contain at least one special character');
            return;
        }



        createUser(email, password, photoURL, displayName)
            .then(result => {
                // console.log(result.user);
                // setSuccess('register success')

                setSuccess(<span className="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Registration Success !</span>
                </span>);
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message)
            })
    }

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
                            <button className="btn bg-[#3FCDA6]">Sign Up</button>
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