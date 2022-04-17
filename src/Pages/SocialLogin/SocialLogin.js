import React from 'react';
import google from '../../image/social/google.png'
import git from '../../image/social/Github.png'
import facebook from '../../image/social/facebook.png'
const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div>
                <button className='btn btn btn-outline-secondary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" srcset="" />
                    <span className='px-2'>Google</span>
                </button>
                <button className='btn btn btn-outline-secondary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={git} alt="" srcset="" />
                    <span className='px-2'>Github </span>
                </button>
                <button className='btn btn btn-outline-secondary w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={facebook} alt="" srcset="" />
                    <span className='px-2'>facebook</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;