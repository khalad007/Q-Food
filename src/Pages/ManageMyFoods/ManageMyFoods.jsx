import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useReactTable } from '@tanstack/react-table'
import ManageMyFoodsRow from "./ManageMyFoodsRow";
import { Link } from "react-router-dom";


const ManageMyFoods = () => {

    const { user } = useContext(AuthContext);
    const [userFoods, setUserFoods] = useState([])

    const url = `http://localhost:5000/allfood?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserFoods(data))
    }, [])

    const handleDelete = id => {


        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this food!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/allfood/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Poof! Your  food has been deleted!", {
                                    icon: "success",
                                })
                                const remaining = userFoods.filter(item => item._id !== id)
                                setUserFoods(remaining)
                            }
                        })

                } else {
                    swal("Your Food is safe!");
                }
            });
    }

    return (
        <div className="overflow-x-auto">


            <div>
                <h1 className="text-center my-14 font-bold text-5xl">Manage My <span className="text-[#3FCDA6]">Foods</span></h1>
            </div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Food Name & Image</th>
                        <th>Quantity</th>
                        <th>Expiere Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userFoods.map(food => <ManageMyFoodsRow
                            key={food._id}
                            food={food}
                            handleDelete={handleDelete}
                        ></ManageMyFoodsRow>)
                    }
                </tbody>



            </table>
            <div>
                
            <h1 className="text-center my-14 font-bold text-5xl">Manage Ruquestor <span className="text-[#3FCDA6]">Foods</span></h1>
            </div>
            <div className="flex justify-center items-center">

                <Link to="/details"><button className="btn bg-[#3FCDA6] my-8">Manage</button></Link>
            </div>
        </div>
    );
};

export default ManageMyFoods;