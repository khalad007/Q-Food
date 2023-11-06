import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <div className="flex justify-center">
                <img className="h-[80vh]" src="https://i.ibb.co/bd3CCwm/Pngtree-socket-404-error-page-for-5228459.png" alt="Error" />
            </div>
            <div className="flex justify-center">
                <Link to="/"><button className="btn bg-[#3FCDA6] text-white">Go Back To Home</button></Link>
            </div>
        </div>
    );
};

export default Error;