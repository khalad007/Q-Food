import { Link, useLoaderData } from "react-router-dom";


const SingleFoodDetails = () => {

    const food = useLoaderData();

    const { _id, food_id, foodName, foodImage, donator: { name, image, email }, foodQuantity, pickupLocation, expiredDateTime, additionalNotes } = food;





    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={foodImage} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mb-5">{foodName}</h1>
                    {/* Food quantity */}
                    <p className="text-sm mb-5 text-gray-500 mt-2">Serves <span className="font-bold">{foodQuantity}</span> people</p>
                    {/* Pick up location */}
                    <p className="text-sm mt-2 mb-5"><span className="font-bold">Pickup Location:</span> {pickupLocation}</p>
                    {/* Expired */}
                    <p className="text-sm mt-2 mb-5"><span className="font-bold">Expires on:</span> {new Date(expiredDateTime).toLocaleString()}</p>

                    <div className="flex items-center mt-2 mb-5">
                        <p className="ml-2 text-sm font-bold mr-4">Donor: {name}</p>
                        <img className="w-20 mask mask-squircle" src={image} alt="Donator Image" />
                    </div>

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>open modal</button>
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Click the button below to close</p>
                            {/* .......................................................................................................... */}

                            




                            {/* ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' */}

                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default SingleFoodDetails;