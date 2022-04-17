import React from 'react';
import notfound from '../../image/notfound.jpg'
const NotFound = () => {
    return (
        <div className='text-center mt-4'>
            <h1>You are in the wrong page</h1>
            <div className='mt-4'>
                <img src={notfound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;