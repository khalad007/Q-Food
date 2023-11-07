import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useReactTable } from '@tanstack/react-table'
import ManageMyFoodsRow from "./ManageMyFoodsRow";


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
        // const proceed = confirm('Are you sure you want to delete ');
        // if(proceed){
        //     fetch(`http://localhost:5000/allfood/${id}`,{
        //         method: 'DELETE'
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })
        // }

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
        </div>
    );
};

export default ManageMyFoods;