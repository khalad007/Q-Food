import { useEffect, useState } from "react";
import FeaturedFoodsCard from "./FeaturedFoodsCard";


const FeaturedFoods = () => {
    const [foods, setfoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/featured-foods')
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
        </div>

    );
};

export default FeaturedFoods;