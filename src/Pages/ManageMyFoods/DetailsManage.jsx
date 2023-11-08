

const DetailsManage = ({food, handleRequestConfirm}) => {

    const { _id, foodName,userEmail, displayName,photoURL, foodQuantity, foodStatus, requestDate } = food;
    return (
        <tr>
        
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{displayName}</div>

                    </div>
                </div>
            </td>
            <td>
                <span> {userEmail} </span>
            </td>
            <td><p><span className="font-bold">Request Date:</span>{requestDate}</p></td>
            <td>
                {
                    foodStatus === 'Delivered' ? <button className="btn btn-outline  btn-success">Delivered</button> :
                    <button onClick={() => handleRequestConfirm(_id)} className="btn btn-outline btn-error">Pending</button>
                }
            </td>
           
        </tr>
    );
};

export default DetailsManage;