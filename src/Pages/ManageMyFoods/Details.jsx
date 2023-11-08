import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import DetailsManage from './DetailsManage';
import { Helmet } from 'react-helmet';

const Details = () => {

    const { user } = useContext(AuthContext)

    const [manageFoods, setManageFoods] = useState([])

    const url = `https://eleven-assignment-server-pink.vercel.app/donatorManage?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setManageFoods(data))
    }, [url])


    const handleRequestConfirm = id => {
        fetch(`https://eleven-assignment-server-pink.vercel.app/reqConfirm/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ foodStatus: 'Delivered' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = manageFoods.filter(manageFood => manageFood._id !== id);
                    const update = manageFoods.find(manageFood => manageFood._id === id);
                    update.foodStatus = 'Delivered'
                    const newFoods = [update, ...remaining]
                    setManageFoods(newFoods)
                }
            })
    }

    return (
        <div className="overflow-x-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>QFood | Details </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <h1 className='text-center text-5xl my-11 font-bold'>Manage Requestor <span className='text-[#40D99E]'>Food</span></h1>
            </div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>Food Name & Image</th>
                        <th>Requester Email</th>
                        <th>Expiere Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageFoods.map(food => <DetailsManage
                            key={food._id}
                            food={food}
                            handleRequestConfirm={handleRequestConfirm}

                        ></DetailsManage>)
                    }
                </tbody>


            </table>
        </div>
    );
};

export default Details;