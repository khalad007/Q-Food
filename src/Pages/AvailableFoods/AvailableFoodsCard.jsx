import { Link } from "react-router-dom";


const AvailableFoodsCard = ({ allFood }) => {
    const { _id, foodName, foodImage, donator: { name, image, email }, foodQuantity, pickupLocation, expiredDateTime, additionalNotes } = allFood;

    return (
        <div className="card card-compact bg-base-100 shadow-xl my-8">
            <figure><img className="h-48 w-full" src={foodImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{foodName}</h2>
                {/* Donator name and image */}
                <div className="flex items-center mt-2">
                    <img className="w-10 h-10 object-cover rounded-full" src={image} alt="Donator Image" />
                    <p className="ml-2 text-sm">{name}</p>
                </div>
                {/* Food quantity */}
                <p className="text-sm text-gray-500 mt-2">Serves <span className="font-bold">{foodQuantity}</span> people</p>
                {/* Pick up location */}
                <p className="text-sm mt-2"><span className="font-bold">Pickup Location:</span> {pickupLocation}</p>
                {/* Expired */}
                <p className="text-sm mt-2"><span className="font-bold">Expires on:</span> {new Date(expiredDateTime).toLocaleString()}</p>
                {/* Additional Notes */}
                <p className="text-sm mt-2"><span className="font-bold">Additional Notes:</span> {additionalNotes}</p>

                <Link to={`/singleFoodDetails/${_id}`}>
                    <button className="bg-[#3FCDA6] text-white py-2 px-4 rounded mt-4 hover:bg-neutral">View Details</button>
                </Link>

            </div>
        </div>
    );
};

export default AvailableFoodsCard;
// availablefoods/singleFoodDetails/