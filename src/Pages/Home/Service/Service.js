import React from 'react';
import './Service.css'
const Service = ({ service }) => {

    const { name, image, description, price } = service;
    return (
        <div className='service'>
            <img className='w-100' src={image} alt="" srcset="" />
            <h2 className='mt-4'>{name}</h2>
            <h4>Price: {price}</h4>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Checkout Package:{name}</button>
        </div>
    );
};

export default Service;