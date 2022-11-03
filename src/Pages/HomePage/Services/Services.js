import React, { useEffect, useState } from 'react';
import ServiceItems from '../ServiceItems/ServiceItems';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://genius-car-server-lake.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className='mb-6'>
            <div className='text-center mt-4 mb-5'>
                <p className="text-2xl text-orange-500 font-bold">Service</p>
                <h1 className="text-5xl text-black font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceItems key={service._id} service={service}></ServiceItems>)
                }
            </div>
        </div>
    );
};

export default Services;