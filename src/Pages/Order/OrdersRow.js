import React, { useEffect, useState } from 'react';

const OrdersRow = ({ order, handleDelete, handleUpdateStates }) => {
    const { _id, customer, phone, serviceName, price, service, states } = order;
    const [orderItem, setOrderItem] = useState({});

    useEffect(() => {
        fetch(`https://genius-car-server-lake.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderItem(data))
    }, [service])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={orderItem?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button onClick={()=>handleUpdateStates(_id)} className="btn btn-ghost btn-xs">{states ? states : 'Pending'}</button>
            </th>
        </tr>
    );
};

export default OrdersRow;