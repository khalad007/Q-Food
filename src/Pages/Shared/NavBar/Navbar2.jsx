import { Link } from "react-router-dom";


const Navbar2 = () => {
    return (
        <div className="flex justify-center bg-[#247CC6] h-14"> 
            <ul className="flex  lg:gap-5 items-center justify-center ">
                <Link to='/'><button className="btn px-2 border-none bg-[#247CC6] text-white">Home</button></Link>
                <Link to='/addproduct'><button className="btn px-2 border-none bg-[#247CC6] text-white">Add Product</button></Link>
                <Link to='/mycart'><button className="btn px-2 border-none bg-[#247CC6] text-white">My Cart</button></Link> 
            </ul>
        </div>
    );
};

export default Navbar2;