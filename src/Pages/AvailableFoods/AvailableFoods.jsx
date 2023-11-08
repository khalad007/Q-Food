import React, { useEffect, useState } from "react";
import AvailableFoodsCard from "./AvailableFoodsCard";
import { Helmet } from "react-helmet";

const AvailableFoods = () => {
    const [allFoods, setAllFoods] = useState([]);
    const [sortedFoods, setSortedFoods] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch('https://eleven-assignment-server-pink.vercel.app/allfood')
            .then(res => res.json())
            .then(data => {
                setAllFoods(data);
                setSortedFoods(data);
            });
    }, []);

    // Sorting 
    const sortByExpirationDate = () => {
        const sorted = [...sortedFoods];
        sorted.sort((a, b) => new Date(a.expiredDateTime) - new Date(b.expiredDateTime));
        setSortedFoods(sorted);
    };

    // Handle search
    const handleSearch = e => {
        const search = e.target.value;
        setSearch(search);

        const filteredFoods = allFoods.filter(food => food.foodName.toLowerCase().includes(search.toLowerCase()));
        setSortedFoods(filteredFoods);
    };

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>QFood | Available Food</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className="text-center mt-14 text-5xl font-bold">Available <span className="text-[#3FCDA6]">Foods</span></h1>
            <div className="flex justify-end mt-4">
                {/* search  */}
                <input
                    type="text"
                    placeholder="Search by food name"
                    onChange={handleSearch}
                    value={search}
                    className="border-2 border-gray-300 rounded-md p-2"
                />
                {/* sort  */}
                <button
                    onClick={sortByExpirationDate}
                    className="bg-[#3FCDA6] text-white py-2 px-4 rounded-md ml-4 hover:bg-neutral"
                >
                    Sort by Expiration Date
                </button>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
                {sortedFoods.map(allFood => <AvailableFoodsCard key={allFood._id} allFood={allFood} />
                )}
            </div>
        </div>
    );
};

export default AvailableFoods;

