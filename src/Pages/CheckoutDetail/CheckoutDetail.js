import React from 'react';
import { useParams } from 'react-router-dom';

const CheckoutDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Checkout detail:{serviceId}</h2>
        </div>
    );
};

export default CheckoutDetail;