import React from 'react';
import google from '../../image/social/google.png'
import git from '../../image/social/Github.png'
import facebook from '../../image/social/facebook.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();
    let errorElement;
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if (user || user1) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>

            {errorElement}

            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn btn-outline-secondary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" srcset="" />
                    <span className='px-2'>Google</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn btn-outline-secondary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={git} alt="" srcset="" />
                    <span className='px-2'>Github </span>
                </button>
                <button
                    className='btn btn btn-outline-secondary w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={facebook} alt="" srcset="" />
                    <span className='px-2'>facebook</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;