import React from 'react';
import notfound from '../../image/notfound.jpg'
const NotFound = () => {
    return (
        <div className='text-center mx-auto'>
            <h1>You are in the wrong page</h1>
            <div>
                <img src={notfound} alt="" />
            </div>

        </div>
    );
};

export default NotFound;