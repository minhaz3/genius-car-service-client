import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItems = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-2">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl ">{title}</h2>
                <p className='font-semibold text-orange-500 text-xl'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/cheakout/${_id}`}>
                    <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItems;