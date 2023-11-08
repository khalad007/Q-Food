import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';

const Update = ({ user }) => {

    const food = useLoaderData();
    const { _id, pickupLocation, foodName, foodImage, foodQuantity, additionalNotes, expiredDateTime, foodStatus } = food;


    const handleUpdateFood = e => {
        e.preventDefault();

        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodQuantity = parseInt(form.foodQuantity.value);


        // const email = user.email;
        // const name = user.displayName;
        // const image = user.photoURL;


        const pickupLocation = form.pickupLocation.value;
        const expiredDateTime = form.expiredDateTime.value;
        const additionalNotes = form.additionalNotes.value;
        const foodStatus = form.foodStatus.value;


        const updateFood = { foodName, foodImage, foodQuantity, foodStatus, additionalNotes, expiredDateTime, pickupLocation }


        console.log(updateFood);

        //send data to the server
        //send data to the server
        fetch(`https://eleven-assignment-server-pink.vercel.app/allFood/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal("Good job!", "Food Updated Successfully.!", "success");
                }
            })
    }

    return (

        <form onSubmit={handleUpdateFood}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>QFood | Update</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div>
                <h1 className='text-center text-5xl font-bold my-16'>Update Food</h1>
            </div>


            {/* form row name & img */}
            <div className="md:flex gap-2">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Food Name" required defaultValue={foodName} name="foodName" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food Image Url</span>
                    </label>
                    <label className="input-group">
                        <input type="url" placeholder="Food Image url" required defaultValue={foodImage} name="foodImage" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>


            {/* food quantity food pick up*/}
            <div className="md:flex gap-2">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="number" placeholder="Quantity" required defaultValue={foodQuantity} name="foodQuantity" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Pickup Location</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Pickup Location" required defaultValue={pickupLocation} name="pickupLocation" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>


            {/* expire & addition  */}
            <div className="md:flex gap-2">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Expire Date</span>
                    </label>
                    <label className="input-group">
                        <input type="datetime-local" placeholder="Expire Date" required defaultValue={expiredDateTime} name="expiredDateTime" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Additional Note</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Additional Note" required defaultValue={additionalNotes} name="additionalNotes" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>


            {/* req date & pick up location */}
            <div className="md:flex gap-2">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food Status </span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue="Available" required name="foodStatus" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>

            <input type="submit" value="Update Food" className="btn btn-block bg-[#3FCDA6]  mt-7 text-white" />
        </form>
    );
};

export default Update;