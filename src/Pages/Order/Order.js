import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrdersRow from './OrdersRow';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://genius-car-server-lake.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(error => console.log(error))
    }, [user?.email])

    const handleDelete = id => {
        const aggre = window.confirm('are you sure to want to delete this order')
        if (aggre) {
            fetch(`https://genius-car-server-lake.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('the orders deleted successfully')
                        const remainingOrders = orders.filter(odr => odr._id !== id);
                        setOrders(remainingOrders)
                    }
                })
        }
    }

    const handleUpdateStates = id => {
        fetch(`https://genius-car-server-lake.vercel.app/orders/${id}`, {
            method:'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({states:'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                const updatedOrder = orders.find(order => order._id === id);
                updatedOrder.states = 'Approved';
                const unUpdatedOrder = orders.filter(order => order._id !== id);
                const newOrder = [updatedOrder, ...unUpdatedOrder];
                setOrders(newOrder);
            }
        })
    }

    return (
        <div>
            <h1 className="text-5xl text-center my-5">Your Total Orders {orders.length}</h1>
            <div className="overflow-x-auto w-full mb-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Message</th>
                            <th>Confirm Ordered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrdersRow key={order._id} order={order} handleDelete={handleDelete} handleUpdateStates={handleUpdateStates}></OrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;