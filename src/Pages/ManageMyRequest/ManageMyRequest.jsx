import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ManageMyRequestSingle from "./ManageMyRequestSingle";


const ManageMyRequest = () => {
    const { user } = useContext(AuthContext)
    const [requests, setRequest] = useState([])


    const url = `http://localhost:5000/myRequest?userEmail=${user.userEmail}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setRequest(data))
    }, [])

    const handleCancelConfirm = id => {


        swal({
            title: "Are you sure?",
            text: "Once Cancel, you will not be able to recover this food!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/cancel/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Poof! You Cancel the food request!", {
                                    icon: "success",
                                })
                                const remaining = requests.filter(item => item._id !== id)
                                setRequest(remaining)
                            }
                        })

                } else {
                    swal("Your Food is safe!");
                }
            });
    }
    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold text-center my-12 ">My Requested <span className="text-[#40D99E] ">Foods</span></h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    requests.map(request => <ManageMyRequestSingle
                        key={request._id}
                        request={request}
                        handleCancelConfirm={handleCancelConfirm}
                    ></ManageMyRequestSingle>)
                }
            </div>
        </div>
    );
};

export default ManageMyRequest;