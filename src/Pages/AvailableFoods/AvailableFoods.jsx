import { useEffect, useState } from "react";
import AvailableFoodsCard from "./AvailableFoodsCard";


const AvailableFoods = () => {

    const [allFoods, setAllFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allfood')
            .then(res => res.json())
            .then(data => setAllFoods(data))
    })

    return (
        <div>
            <h1 className="text-center mt-14 text-5xl font-bold">Available <span className="text-[#3FCDA6]">Foods</span></h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 " >
                {
                    allFoods.map(allFood => <AvailableFoodsCard
                        key={allFood._id}
                        allFood={allFood}
                    ></AvailableFoodsCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;