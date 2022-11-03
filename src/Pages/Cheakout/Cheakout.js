import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Cheakout = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, title, price} = service;

    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = `${user?.email || 'Undifined'}`;
        const phone = form.phone.value;
        const message = form.message.value;

        const order ={
            service : _id,
            serviceName : title,
            price,
            customer : name,
            email,
            phone,
            message
        }

        fetch('https://genius-car-server-lake.vercel.app/orders', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                alert('order placed successfully');
                form.reset();
            }
        })
        .catch(error => console.log(error))
    }

    return ( 
        <div className='my-8'>
            <form onSubmit={handleOnSubmit}>
            <h1 className="text-5xl font-bold text-center mb-3">{title}</h1>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 '>
            <input type="text" name='firstName' placeholder="First Name" className="input input-bordered input-error w-full" />
            <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered input-error w-full" />
            <input type="text" name='email' defaultValue={user?.email} placeholder="Your Email" className="input input-bordered input-error w-full" readOnly/>
            <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered input-error w-full" />
            </div>
            <textarea className="textarea textarea-error w-full mt-5" name='message' placeholder="Your Message"></textarea>
            <input type="submit" value="Place Your Order" className='btn my-3 flex justify-center' />
            </form>
        </div>
    );
};

export default Cheakout;