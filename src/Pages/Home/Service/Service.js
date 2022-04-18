import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {

    const { id, name, image, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={image} alt="" srcset="" />
            <h2 className='mt-4'>{name}</h2>
            <h4>Price: {price}</h4>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Checkout Package</button>
        </div>
    );
};

export default Service;