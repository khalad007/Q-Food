import { Link } from "react-router-dom";


const Navbar2 = () => {
    return ( 
        <div className="flex justify-center bg-base-100 h-14"> 
            <ul className="flex  lg:gap-5 items-center justify-center ">
                <Link to='/'><button className="btn px-2 border-none  text-black">Home</button></Link>
                <Link to='/availablefoods'><button className="btn px-2 border-none  text-black">Available Foods</button></Link>
                <Link to='/addfood'><button className="btn px-2 border-none  text-black">Add Food</button></Link> 
                <Link to='/mycart'><button className="btn px-2 border-none  text-black">Manage My Foods</button></Link> 
                <Link to='/mycart'><button className="btn px-2 border-none  text-black">My Food Request</button></Link> 
            </ul>
        </div>
    );
};

export default Navbar2;