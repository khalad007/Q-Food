import { Link } from "react-router-dom";


const ManageMyFoodsRow = ({ food , handleDelete}) => {

    const { _id, foodName, foodImage, foodQuantity, expiredDateTime, foodStatus } = food;

    
    

    return (
        <tr>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={foodImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{foodName}</div>

                    </div>
                </div>
            </td>
            <td>
                <span>Serve {foodQuantity} people</span>
            </td>
            <td><p><span className="font-bold">Expires on:</span> {new Date(expiredDateTime).toLocaleString()}</p></td>
            <td>{foodStatus}</td>
            <th>
                <Link to={`/update/${_id}`}><button className="btn btn-ghost btn-xs">Edit</button></Link>
                
                <Link to="/details"><button className="btn btn-ghost btn-xs">details</button></Link>
            </th>
        </tr>
    );
};

export default ManageMyFoodsRow;