import { useEffect, useState } from "react";
import FeaturedFoodsCard from "./FeaturedFoodsCard";
import { Link } from "react-router-dom";


const FeaturedFoods = () => {
    const [foods, setfoods] = useState([]);


    useEffect(() => {
        fetch('https://eleven-assignment-server-pink.vercel.app/featured-foods')
            .then(res => res.json())
            .then(data => setfoods(data))
    })
    return (
        <div >
            <h1 className="text-center mt-14 text-5xl font-bold">Featured <span className="text-[#3FCDA6]">Foods</span></h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 " >
                {
                    foods.map(food => <FeaturedFoodsCard
                        key={food._id}
                        food={food}
                    ></FeaturedFoodsCard>)
                }
            </div>
            <div className="text-center my-10">
                <Link to="availablefoods">
                    <button className="bg-[#3FCDA6] text-black btn rounded  hover:bg-ghost">Show All Food</button>
                </Link>

            </div>
        </div>

    );
};

export default FeaturedFoods;