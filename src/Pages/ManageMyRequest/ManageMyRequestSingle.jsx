

const ManageMyRequestSingle = ({ request,handleCancelConfirm }) => {

    const { _id, donation, donatorName, expiredDateTime, pickupLocation, foodImage, foodName, foodStatus, requestDate } = request;


   

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={foodImage} />

                    </div>
                    <p className="flex justify-center items-center ml-5 font-bold">{foodName}</p>
                </div>
                <h2 className="card-title"><span className="font-bold">Donator : </span>{donatorName}</h2>
                <p><span className="font-bold">Pickup Location : </span>{pickupLocation}</p>
                <p className="text-sm mt-2 mb-5"><span className="font-bold">Expires on:</span> {new Date(expiredDateTime).toLocaleString()}</p>
                <p><span className="font-bold">Request Date : </span>{requestDate}</p>
                <p><span className="font-bold">My Donation : </span>{donation} <span className="font-bold">$</span></p>
                <p><span className="font-bold">Status : </span>{foodStatus}</p>
                <div className="card-actions">
                    {
                        foodStatus === 'Delivered' ? <button className="btn btn-outline  btn-success">Delivered</button> :
                            <div>
                                <span className="font-bold">Cancel Request --</span> <button onClick={() => handleCancelConfirm(_id)} className="btn btn-outline btn-error">Cancel</button>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageMyRequestSingle;